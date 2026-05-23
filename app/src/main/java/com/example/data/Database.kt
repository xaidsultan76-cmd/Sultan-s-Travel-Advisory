package com.example.data

import androidx.room.Dao
import androidx.room.Database
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.RoomDatabase
import kotlinx.coroutines.flow.Flow

@Dao
interface TravelAdvisoryDao {
    @Query("SELECT * FROM travel_advisories ORDER BY country ASC")
    fun getAllAdvisories(): Flow<List<TravelAdvisory>>

    @Query("SELECT * FROM travel_advisories WHERE isBookmarked = 1 ORDER BY country ASC")
    fun getBookmarkedAdvisories(): Flow<List<TravelAdvisory>>

    @Query("SELECT * FROM travel_advisories WHERE country LIKE '%' || :query || '%' OR region LIKE '%' || :query || '%' OR requirements LIKE '%' || :query || '%' OR studentVisaType LIKE '%' || :query || '%' OR studentVisaRequirements LIKE '%' || :query || '%' ORDER BY country ASC")
    fun searchAdvisories(query: String): Flow<List<TravelAdvisory>>

    @Query("UPDATE travel_advisories SET isBookmarked = :isBookmarked WHERE id = :id")
    suspend fun updateBookmarkState(id: Int, isBookmarked: Boolean)

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertAll(advisories: List<TravelAdvisory>)

    @Query("SELECT COUNT(*) FROM travel_advisories")
    suspend fun getCount(): Int
}

@Dao
interface UniversityExchangeDao {
    @Query("SELECT * FROM exchange_universities ORDER BY name ASC")
    fun getAllUniversities(): Flow<List<UniversityExchange>>

    @Query("SELECT * FROM exchange_universities WHERE isFavorite = 1 ORDER BY name ASC")
    fun getFavoriteUniversities(): Flow<List<UniversityExchange>>

    @Query("SELECT * FROM exchange_universities WHERE name LIKE '%' || :query || '%' OR country LIKE '%' || :query || '%' OR region LIKE '%' || :query || '%' OR exchangePrograms LIKE '%' || :query || '%' ORDER BY name ASC")
    fun searchUniversities(query: String): Flow<List<UniversityExchange>>

    @Query("UPDATE exchange_universities SET isFavorite = :isFavorite WHERE id = :id")
    suspend fun updateFavoriteState(id: Int, isFavorite: Boolean)

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertAll(universities: List<UniversityExchange>)
}

@Dao
interface LandmarkDestinationDao {
    @Query("SELECT * FROM destinations_landmarks ORDER BY title ASC")
    fun getAllLandmarks(): Flow<List<LandmarkDestination>>

    @Query("SELECT * FROM destinations_landmarks WHERE isSaved = 1 ORDER BY title ASC")
    fun getSavedLandmarks(): Flow<List<LandmarkDestination>>

    @Query("SELECT * FROM destinations_landmarks WHERE title LIKE '%' || :query || '%' OR country LIKE '%' || :query || '%' OR description LIKE '%' || :query || '%' ORDER BY title ASC")
    fun searchLandmarks(query: String): Flow<List<LandmarkDestination>>

    @Query("UPDATE destinations_landmarks SET isSaved = :isSaved WHERE id = :id")
    suspend fun updateSavedState(id: Int, isSaved: Boolean)

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertAll(landmarks: List<LandmarkDestination>)
}

@Database(entities = [TravelAdvisory::class, UniversityExchange::class, LandmarkDestination::class], version = 4, exportSchema = false)
abstract class AppDatabase : RoomDatabase() {
    abstract fun travelAdvisoryDao(): TravelAdvisoryDao
    abstract fun universityExchangeDao(): UniversityExchangeDao
    abstract fun landmarkDestinationDao(): LandmarkDestinationDao
}
