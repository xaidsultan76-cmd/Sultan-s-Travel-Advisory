package com.example

import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.BugReport
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material3.*
import androidx.compose.runtime.getValue
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.ui.MainScreen
import com.example.ui.TravelStudyViewModel
import com.example.ui.TravelStudyViewModelFactory
import com.example.ui.theme.MyApplicationTheme
import kotlinx.coroutines.flow.MutableStateFlow

class MainActivity : ComponentActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    enableEdgeToEdge()

    var errorMessage by mutableStateOf<String?>(null)
    var errorStack by mutableStateOf<String?>(null)

    val defaultHandler = Thread.getDefaultUncaughtExceptionHandler()
    // Uncaught exception boundary to process and recover database/UI anomalies
    Thread.setDefaultUncaughtExceptionHandler { thread, throwable ->
      val stackTrace = Log.getStackTraceString(throwable)
      Log.e("MainActivity", "Uncaught runtime exception caught in handler:", throwable)

      if (stackTrace.contains("room", ignoreCase = true) || 
          stackTrace.contains("sqlite", ignoreCase = true) || 
          stackTrace.contains("database", ignoreCase = true)) {
        try {
          deleteDatabase("travel_study_companion.db")
        } catch (e: Exception) {
          Log.e("MainActivity", "Database clear failure", e)
        }
      }

      Handler(Looper.getMainLooper()).post {
        errorMessage = throwable.message ?: "Unknown thread synchronization error"
        errorStack = stackTrace
      }

      // Chain to the default system handler to allow clean process termination
      // and prevent zombie input dispatcher channel warnings.
      defaultHandler?.uncaughtException(thread, throwable)
    }

    setContent {
      val vmResult = remember {
        try {
          val vm = androidx.lifecycle.ViewModelProvider(
            this@MainActivity,
            TravelStudyViewModelFactory(application)
          ).get(TravelStudyViewModel::class.java)
          Result.success(vm)
        } catch (t: Throwable) {
          Result.failure(t)
        }
      }

      val activeTheme by remember(vmResult) {
        if (vmResult.isSuccess) {
          vmResult.getOrThrow().selectedThemeName
        } else {
          MutableStateFlow("Cosmic Slate")
        }
      }.collectAsState()

      MyApplicationTheme(themeName = activeTheme) {
        val currentError = errorMessage
        if (currentError != null) {
          Scaffold { padding ->
            Box(
              modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .background(MaterialTheme.colorScheme.errorContainer.copy(alpha = 0.1f)),
              contentAlignment = Alignment.Center
            ) {
              Card(
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                shape = RoundedCornerShape(24.dp),
                modifier = Modifier
                  .fillMaxWidth(0.9f)
                  .fillMaxHeight(0.85f),
                elevation = CardDefaults.cardElevation(defaultElevation = 8.dp)
              ) {
                Column(
                  modifier = Modifier
                    .padding(24.dp)
                    .fillMaxSize(),
                  horizontalAlignment = Alignment.CenterHorizontally
                ) {
                  Icon(
                    imageVector = Icons.Default.BugReport,
                    contentDescription = "Crash Diagnostic Icon",
                    tint = MaterialTheme.colorScheme.error,
                    modifier = Modifier.size(56.dp)
                  )
                  Spacer(Modifier.height(12.dp))
                  Text(
                    text = "A Recovery Action Was Taken!",
                    style = MaterialTheme.typography.titleLarge,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.error
                  )
                  Spacer(Modifier.height(8.dp))
                  Text(
                    text = "System captured an background exception during active operations. Pressing refresh below will delete local cache tables and refresh program listings.",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    lineHeight = 16.sp
                  )
                  
                  Spacer(Modifier.height(16.dp))

                  Card(
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.errorContainer.copy(alpha = 0.15f)),
                    shape = RoundedCornerShape(12.dp),
                    modifier = Modifier.weight(1f).fillMaxWidth()
                  ) {
                    Column(
                      modifier = Modifier
                        .padding(12.dp)
                        .verticalScroll(rememberScrollState())
                    ) {
                      Text(
                        text = "Reason: $currentError",
                        style = MaterialTheme.typography.labelMedium,
                        fontWeight = FontWeight.Bold,
                        color = MaterialTheme.colorScheme.error
                      )
                      Spacer(Modifier.height(6.dp))
                      Text(
                        text = errorStack ?: "",
                        style = androidx.compose.ui.text.TextStyle(
                          fontFamily = androidx.compose.ui.text.font.FontFamily.Monospace,
                          fontSize = 10.sp
                        ),
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                      )
                    }
                  }

                  Spacer(Modifier.height(16.dp))

                  Button(
                    onClick = {
                      try {
                        deleteDatabase("travel_study_companion.db")
                      } catch (e: Exception) {
                        Log.e("MainActivity", "Database manual clear failed", e)
                      }
                      errorMessage = null
                      errorStack = null
                      finish()
                      startActivity(intent)
                    },
                    colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.error),
                    modifier = Modifier.fillMaxWidth()
                  ) {
                    Icon(Icons.Default.Refresh, "Refresh icon")
                    Spacer(Modifier.width(8.dp))
                    Text("Reset Local DB & Restart App")
                  }
                }
              }
            }
          }
        } else {
          if (vmResult.isFailure) {
            val exception = vmResult.exceptionOrNull()
            errorMessage = exception?.message ?: "ViewModel initialization error"
            errorStack = Log.getStackTraceString(exception)
          } else {
            val viewModel = vmResult.getOrThrow()
            Surface(
              modifier = Modifier.fillMaxSize(),
              color = MaterialTheme.colorScheme.background
            ) {
              MainScreen(viewModel = viewModel)
            }
          }
        }
      }
    }
  }
}
