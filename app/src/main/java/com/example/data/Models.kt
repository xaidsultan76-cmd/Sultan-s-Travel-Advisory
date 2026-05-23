package com.example.data

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "travel_advisories")
data class TravelAdvisory(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    val country: String,
    val region: String,
    val riskLevel: String, // "Safe", "Exercise Caution", "Reconsider Travel", "Do Not Travel"
    val visaStatus: String, // "Visa Free", "Visa on Arrival", "eVisa", "Visa Required"
    val borderStatus: String, // "Open", "Restricted", "Closed"
    val requirements: String, // Detailed entry info
    val lastUpdated: String, // Updated date
    val isBookmarked: Boolean = false,
    val studentVisaAvailable: Boolean = true,
    val studentVisaType: String = "Sovereign Study Visa",
    val studentVisaRequirements: String = "Biometric enrolment, authorized university acceptance letter, sufficient subsistence fund declaration, and healthcare insurance cover.",
    val studentGuide: String = "Survival Guide: Setup local bank account, secure a student transit card, and obtain a local eSIM matching student discounts.",
    val housingGuide: String = "Housing Guide: Student residences average €400-€700/mo. Check local university portals and flatshare sights early."
)

@Entity(tableName = "exchange_universities")
data class UniversityExchange(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    val name: String,
    val country: String,
    val region: String,
    val acceptanceRate: Double, // Percentage, e.g., 65.5
    val feesUSD: Int, // e.g. 15000
    val exchangePrograms: String, // comma-separated program names
    val durationMonths: Int = 6,
    val isFavorite: Boolean = false
)

@Entity(tableName = "destinations_landmarks")
data class LandmarkDestination(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    val title: String,
    val country: String,
    val description: String,
    val category: String, // "Culture", "Nature", "History", "Modern"
    val costLevel: String, // "Free", "Low Cost", "Medium Cost", "Premium"
    val popularity: Int = 5, // Rating 1 to 5
    val isSaved: Boolean = false
)

data class FlightDeal(
    val id: Int,
    val departureCountry: String,
    val destinationCountry: String,
    val airline: String,
    val basePriceUSD: Int,
    val currentPriceUSD: Int,
    val trend: String, // "dropping" (price down), "rising", "stable"
    val seatAvailability: Int = 12,
    val isDealOfTheDay: Boolean = false,
    val lastUpdatedText: String = "Just now"
)
