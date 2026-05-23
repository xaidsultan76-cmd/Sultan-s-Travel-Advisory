package com.example.data

import android.content.Context
import androidx.room.Room
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class TravelStudyRepository(private val context: Context) {

    private val database: AppDatabase by lazy {
        Room.databaseBuilder(
            context.applicationContext,
            AppDatabase::class.java,
            "travel_study_companion.db"
        ).fallbackToDestructiveMigration()
         .build()
    }

    private val advisoryDao by lazy { database.travelAdvisoryDao() }
    private val universityDao by lazy { database.universityExchangeDao() }
    private val landmarkDao by lazy { database.landmarkDestinationDao() }

    init {
        // Run seed check on initialization (handles empty-database first launches)
        CoroutineScope(Dispatchers.IO).launch {
            checkAndSeedDatabase()
        }
    }

    private suspend fun checkAndSeedDatabase() {
        val count = advisoryDao.getCount()
        if (count == 0) {
            // Seed Travel Advisories
            val seededAdvisories = SeedData.getFullAdvisories()
            advisoryDao.insertAll(seededAdvisories)

            // Seed Exchange Universities
            val seededUniversities = SeedData.getFullUniversities()
            universityDao.insertAll(seededUniversities)

            // Seed Landmarks
            val seededLandmarks = SeedData.getFullLandmarks()
            landmarkDao.insertAll(seededLandmarks)
        }
    }

    // --- Travel Advisory methods ---
    fun getAllAdvisories(): Flow<List<TravelAdvisory>> = advisoryDao.getAllAdvisories()
    fun getBookmarkedAdvisories(): Flow<List<TravelAdvisory>> = advisoryDao.getBookmarkedAdvisories()
    fun searchAdvisories(query: String): Flow<List<TravelAdvisory>> = advisoryDao.searchAdvisories(query)
    suspend fun updateAdvisoryBookmark(id: Int, flag: Boolean) = withContext(Dispatchers.IO) {
        advisoryDao.updateBookmarkState(id, flag)
    }

    // --- University Exchange methods ---
    fun getAllUniversities(): Flow<List<UniversityExchange>> = universityDao.getAllUniversities()
    fun getFavoriteUniversities(): Flow<List<UniversityExchange>> = universityDao.getFavoriteUniversities()
    fun searchUniversities(query: String): Flow<List<UniversityExchange>> = universityDao.searchUniversities(query)
    suspend fun updateUniversityFavorite(id: Int, flag: Boolean) = withContext(Dispatchers.IO) {
        universityDao.updateFavoriteState(id, flag)
    }

    // --- Landmark Destination methods ---
    fun getAllLandmarks(): Flow<List<LandmarkDestination>> = landmarkDao.getAllLandmarks()
    fun getSavedLandmarks(): Flow<List<LandmarkDestination>> = landmarkDao.getSavedLandmarks()
    fun searchLandmarks(query: String): Flow<List<LandmarkDestination>> = landmarkDao.searchLandmarks(query)
    suspend fun updateLandmarkSaved(id: Int, flag: Boolean) = withContext(Dispatchers.IO) {
        landmarkDao.updateSavedState(id, flag)
    }
}
