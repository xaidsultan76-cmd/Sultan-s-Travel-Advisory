package com.example.ui

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import com.example.data.LandmarkDestination
import com.example.data.TravelAdvisory
import com.example.data.TravelStudyRepository
import com.example.data.UniversityExchange
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.launch

class TravelStudyViewModel(application: Application) : AndroidViewModel(application) {

    private val repository = TravelStudyRepository(application)

    // --- Active Custom Theme State ---
    val selectedThemeName = MutableStateFlow("Cosmic Slate")

    // --- Interactive Flight Tickets Auto-Update States ---
    val autoSyncEnabled = MutableStateFlow(true)
    val isSyncing = MutableStateFlow(false)
    val lastSyncTimeStr = MutableStateFlow(java.text.SimpleDateFormat("hh:mm:ss a", java.util.Locale.getDefault()).format(java.util.Date()))
    val flightDeals = MutableStateFlow<List<com.example.data.FlightDeal>>(emptyList())

    init {
        // Initialize flight deals list
        flightDeals.value = listOf(
            com.example.data.FlightDeal(1, "Germany", "Japan", "Lufthansa", 950, 920, "dropping", 12, false, "Just now"),
            com.example.data.FlightDeal(2, "United States", "United Kingdom", "British Airways", 680, 580, "dropping", 4, true, "Just now"),
            com.example.data.FlightDeal(3, "Canada", "Australia", "Qantas", 1200, 1180, "dropping", 15, false, "Just now"),
            com.example.data.FlightDeal(4, "United Kingdom", "Germany", "EasyJet", 110, 89, "dropping", 2, true, "Just now"),
            com.example.data.FlightDeal(5, "United States", "Germany", "Delta AirLines", 840, 840, "stable", 28, false, "Just now")
        )

        // Launch auto-sync background loop
        viewModelScope.launch {
            while (true) {
                kotlinx.coroutines.delay(12000) // triggers every 12 seconds
                if (autoSyncEnabled.value) {
                    triggerAutomatedPriceRefresh()
                }
            }
        }
    }

    private fun triggerAutomatedPriceRefresh() {
        viewModelScope.launch {
            isSyncing.value = true
            // Fake Network delay to show wonderful pulsing progress bar in UI
            kotlinx.coroutines.delay(1200)
            
            // Randomly update prices & seat availability to simulate live systems
            val currentList = flightDeals.value.map { deal ->
                val priceChange = (-30..30).random()
                val newPrice = (deal.basePriceUSD + priceChange).coerceAtLeast(50)
                val trend = when {
                    newPrice < deal.currentPriceUSD -> "dropping"
                    newPrice > deal.currentPriceUSD -> "rising"
                    else -> "stable"
                }
                val newSeats = (deal.seatAvailability + (-2..1).random()).coerceIn(1, 40)
                deal.copy(
                    currentPriceUSD = newPrice,
                    trend = trend,
                    seatAvailability = newSeats,
                    lastUpdatedText = java.text.SimpleDateFormat("hh:mm:ss a", java.util.Locale.getDefault()).format(java.util.Date())
                )
            }
            flightDeals.value = currentList
            lastSyncTimeStr.value = java.text.SimpleDateFormat("hh:mm:ss a", java.util.Locale.getDefault()).format(java.util.Date())
            isSyncing.value = false
        }
    }

    fun forceManualRefresh() {
        triggerAutomatedPriceRefresh()
    }

    // --- Search & Filter States ---
    val advisorySearch = MutableStateFlow("")
    val selectedAdvisoryContinent = MutableStateFlow("All")
    val selectedAdvisoryRisk = MutableStateFlow("All")

    val universitySearch = MutableStateFlow("")
    val selectedUniversityContinent = MutableStateFlow("All")
    val selectedUniversityFeeCap = MutableStateFlow(50000) // Default max
    val selectedUniversityAcceptRate = MutableStateFlow(0f) // Default min

    val landmarkSearch = MutableStateFlow("")
    val selectedLandmarkContinent = MutableStateFlow("All")
    val selectedLandmarkCategory = MutableStateFlow("All")

    // --- Visa Status Checker calculator states ---
    val visaOrigin = MutableStateFlow("Germany")
    val visaDestination = MutableStateFlow("Japan")

    // --- Flowing raw data from database ---
    val allAdvisories = repository.getAllAdvisories().stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())
    private val rawAdvisories = repository.getAllAdvisories()
    private val rawUniversities = repository.getAllUniversities()
    private val rawLandmarks = repository.getAllLandmarks()

    // --- Filtered StateFlows for UI ---
    val filteredAdvisories: StateFlow<List<TravelAdvisory>> = combine(
        rawAdvisories,
        advisorySearch,
        selectedAdvisoryContinent,
        selectedAdvisoryRisk
    ) { list, search, continent, risk ->
        list.filter { item ->
            val matchesSearch = item.country.contains(search, ignoreCase = true) ||
                    item.region.contains(search, ignoreCase = true) ||
                    item.requirements.contains(search, ignoreCase = true)
            val matchesContinent = continent == "All" || item.region.equals(continent, ignoreCase = true)
            val matchesRisk = risk == "All" || item.riskLevel.contains(risk, ignoreCase = true)
            matchesSearch && matchesContinent && matchesRisk
        }
    }.stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    val filteredUniversities: StateFlow<List<UniversityExchange>> = combine(
        rawUniversities,
        universitySearch,
        selectedUniversityContinent,
        selectedUniversityFeeCap,
        selectedUniversityAcceptRate
    ) { list, search, continent, feeCap, acceptRate ->
        list.filter { item ->
            val matchesSearch = item.name.contains(search, ignoreCase = true) ||
                    item.country.contains(search, ignoreCase = true) ||
                    item.exchangePrograms.contains(search, ignoreCase = true)
            val matchesContinent = continent == "All" || item.region.equals(continent, ignoreCase = true)
            val matchesFee = item.feesUSD <= feeCap
            val matchesAccept = item.acceptanceRate >= acceptRate
            matchesSearch && matchesContinent && matchesFee && matchesAccept
        }
    }.stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    val filteredLandmarks: StateFlow<List<LandmarkDestination>> = combine(
        rawLandmarks,
        landmarkSearch,
        selectedLandmarkContinent,
        selectedLandmarkCategory
    ) { list, search, continent, category ->
        list.filter { item ->
            val matchesSearch = item.title.contains(search, ignoreCase = true) ||
                    item.country.contains(search, ignoreCase = true) ||
                    item.description.contains(search, ignoreCase = true)
            val matchesContinent = continent == "All" || item.country.contains(continent, ignoreCase = true) || 
                    // Fallback to match continent from seed metadata
                    getContinentForCountry(item.country).equals(continent, ignoreCase = true)
            val matchesCategory = category == "All" || item.category.equals(category, ignoreCase = true)
            matchesSearch && matchesContinent && matchesCategory
        }
    }.stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    // --- User's Saved Collections for Planner ---
    val bookmarkedAdvisories: StateFlow<List<TravelAdvisory>> = repository.getBookmarkedAdvisories()
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    val favoriteUniversities: StateFlow<List<UniversityExchange>> = repository.getFavoriteUniversities()
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    val savedLandmarks: StateFlow<List<LandmarkDestination>> = repository.getSavedLandmarks()
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())

    // --- Actions ---
    fun toggleAdvisoryBookmark(id: Int, flag: Boolean) {
        viewModelScope.launch { repository.updateAdvisoryBookmark(id, flag) }
    }

    fun toggleUniversityFavorite(id: Int, flag: Boolean) {
        viewModelScope.launch { repository.updateUniversityFavorite(id, flag) }
    }

    fun toggleLandmarkSaved(id: Int, flag: Boolean) {
        viewModelScope.launch { repository.updateLandmarkSaved(id, flag) }
    }

    // Helper to estimate continent mapped to quick country
    private fun getContinentForCountry(country: String): String {
        val matchingSeed = com.example.data.SeedData.seedCountries.firstOrNull { it.country.equals(country, ignoreCase = true) }
        return matchingSeed?.region ?: "All"
    }
}

class TravelStudyViewModelFactory(private val application: Application) : ViewModelProvider.Factory {
    override fun <T : ViewModel> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(TravelStudyViewModel::class.java)) {
            @Suppress("UNCHECKED_CAST")
            return TravelStudyViewModel(application) as T
        }
        throw IllegalArgumentException("Unknown ViewModel class")
    }
}
