package com.example.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

// Cosmic Slate (Premium Dark)
private val CosmicPrimary = Color(0xFF3B82F6)
private val CosmicSecondary = Color(0xFF8B5CF6)
private val CosmicTertiary = Color(0xFF06B6D4)
private val CosmicBackground = Color(0xFF0D0F16)
private val CosmicSurface = Color(0xFF1E293B)
private val CosmicOnPrimary = Color(0xFFFFFFFF)
private val CosmicOnSecondary = Color(0xFFFFFFFF)
private val CosmicOnBackground = Color(0xFFF8FAFC)
private val CosmicOnSurface = Color(0xFFF8FAFC)

private val CosmicDarkColorScheme = darkColorScheme(
    primary = CosmicPrimary,
    secondary = CosmicSecondary,
    tertiary = CosmicTertiary,
    background = CosmicBackground,
    surface = CosmicSurface,
    onPrimary = CosmicOnPrimary,
    onSecondary = CosmicOnSecondary,
    onBackground = CosmicOnBackground,
    onSurface = CosmicOnSurface,
    primaryContainer = Color(0xFF1E3A8A),
    onPrimaryContainer = Color(0xFF93C5FD),
    surfaceVariant = Color(0xFF334155),
    onSurfaceVariant = Color(0xFFCBD5E1)
)

// Samsung Aura (Galaxy High-Contrast Purple Dark)
private val AuraPrimary = Color(0xFFA855F7)
private val AuraSecondary = Color(0xFF3B82F6)
private val AuraTertiary = Color(0xFFEC4899)
private val AuraBackground = Color(0xFF0F0B1E)
private val AuraSurface = Color(0xFF1E1538)
private val AuraOnPrimary = Color(0xFFFFFFFF)
private val AuraOnSecondary = Color(0xFFFFFFFF)
private val AuraOnBackground = Color(0xFFFAF5FF)
private val AuraOnSurface = Color(0xFFFAF5FF)

private val AuraColorScheme = darkColorScheme(
    primary = AuraPrimary,
    secondary = AuraSecondary,
    tertiary = AuraTertiary,
    background = AuraBackground,
    surface = AuraSurface,
    onPrimary = AuraOnPrimary,
    onSecondary = AuraOnSecondary,
    onBackground = AuraOnBackground,
    onSurface = AuraOnSurface,
    primaryContainer = Color(0xFF581C87),
    onPrimaryContainer = Color(0xFFF3E8FF),
    surfaceVariant = Color(0xFF2E1A47),
    onSurfaceVariant = Color(0xFFE9D5FF)
)

// Emerald Horizon (Vibrant Eco-Forest Light)
private val EmeraldPrimary = Color(0xFF059669)
private val EmeraldSecondary = Color(0xFF0F766E)
private val EmeraldTertiary = Color(0xFF0D9488)
private val EmeraldBackground = Color(0xFFF4F9F5)
private val EmeraldSurface = Color(0xFFFFFFFF)
private val EmeraldOnPrimary = Color(0xFFFFFFFF)
private val EmeraldOnSecondary = Color(0xFFFFFFFF)
private val EmeraldOnBackground = Color(0xFF064E3B)
private val EmeraldOnSurface = Color(0xFF064E3B)

private val EmeraldColorScheme = lightColorScheme(
    primary = EmeraldPrimary,
    secondary = EmeraldSecondary,
    tertiary = EmeraldTertiary,
    background = EmeraldBackground,
    surface = EmeraldSurface,
    onPrimary = EmeraldOnPrimary,
    onSecondary = EmeraldOnSecondary,
    onBackground = EmeraldOnBackground,
    onSurface = EmeraldOnSurface,
    primaryContainer = Color(0xFFD1FAE5),
    onPrimaryContainer = Color(0xFF065F46),
    surfaceVariant = Color(0xFFE6F4EA),
    onSurfaceVariant = Color(0xFF1F2937)
)

// Sunset Scholar (Terracotta Soft Light)
private val SunsetPrimary = Color(0xFFEA580C)
private val SunsetSecondary = Color(0xFF991B1B)
private val SunsetTertiary = Color(0xFFD97706)
private val SunsetBackground = Color(0xFFFFFBEB)
private val SunsetSurface = Color(0xFFFFF7ED)
private val SunsetOnPrimary = Color(0xFFFFFFFF)
private val SunsetOnSecondary = Color(0xFFFFFFFF)
private val SunsetOnBackground = Color(0xFF451A03)
private val SunsentOnSurface = Color(0xFF451A03)

private val SunsetColorScheme = lightColorScheme(
    primary = SunsetPrimary,
    secondary = SunsetSecondary,
    tertiary = SunsetTertiary,
    background = SunsetBackground,
    surface = SunsetSurface,
    onPrimary = SunsetOnPrimary,
    onSecondary = SunsetOnSecondary,
    onBackground = SunsetOnBackground,
    onSurface = SunsentOnSurface,
    primaryContainer = Color(0xFFFFEDD5),
    onPrimaryContainer = Color(0xFF7C2D12),
    surfaceVariant = Color(0xFFFDE68A),
    onSurfaceVariant = Color(0xFF78350F)
)

// Arctic Frost (Crisp Glacier Light)
private val ArcticPrimary = Color(0xFF0EA5E9)
private val ArcticSecondary = Color(0xFF0284C7)
private val ArcticTertiary = Color(0xFF06B6D4)
private val ArcticBackground = Color(0xFFF0F9FF)
private val ArcticSurface = Color(0xFFFFFFFF)
private val ArcticOnPrimary = Color(0xFFFFFFFF)
private val ArcticOnSecondary = Color(0xFFFFFFFF)
private val ArcticOnBackground = Color(0xFF0C4A6E)
private val ArcticOnSurface = Color(0xFF0C4A6E)

private val ArcticColorScheme = lightColorScheme(
    primary = ArcticPrimary,
    secondary = ArcticSecondary,
    tertiary = ArcticTertiary,
    background = ArcticBackground,
    surface = ArcticSurface,
    onPrimary = ArcticOnPrimary,
    onSecondary = ArcticOnSecondary,
    onBackground = ArcticOnBackground,
    onSurface = ArcticOnSurface,
    primaryContainer = Color(0xFFE0F2FE),
    onPrimaryContainer = Color(0xFF0369A1),
    surfaceVariant = Color(0xFFE0F2FE),
    onSurfaceVariant = Color(0xFF0284C7)
)

// Midnight Rose (Neon Burgundy Dark)
private val RosePrimary = Color(0xFFF43F5E)
private val RoseSecondary = Color(0xFFFB7185)
private val RoseTertiary = Color(0xFFFDA4AF)
private val RoseBackground = Color(0xFF1C0A10)
private val RoseSurface = Color(0xFF2E121D)
private val RoseOnPrimary = Color(0xFFFFFFFF)
private val RoseOnSecondary = Color(0xFFFFFFFF)
private val RoseOnBackground = Color(0xFFFFF1F2)
private val RoseOnSurface = Color(0xFFFFF1F2)

private val RoseColorScheme = darkColorScheme(
    primary = RosePrimary,
    secondary = RoseSecondary,
    tertiary = RoseTertiary,
    background = RoseBackground,
    surface = RoseSurface,
    onPrimary = RoseOnPrimary,
    onSecondary = RoseOnSecondary,
    onBackground = RoseOnBackground,
    onSurface = RoseOnSurface,
    primaryContainer = Color(0xFF881337),
    onPrimaryContainer = Color(0xFFFFE4E6),
    surfaceVariant = Color(0xFF4C1D2F),
    onSurfaceVariant = Color(0xFFFDA4AF)
)

// Onyx Jetblack (OLED Pure Black & Matrix Lime)
private val OnyxPrimary = Color(0xFF00FF87)
private val OnyxSecondary = Color(0xFF00E5FF)
private val OnyxTertiary = Color(0xFFFFFFFF)
private val OnyxBackground = Color(0xFF000000)
private val OnyxSurface = Color(0xFF080808)
private val OnyxlOnPrimary = Color(0xFF000000)
private val OnyxlOnSecondary = Color(0xFF000000)
private val OnyxlOnBackground = Color(0xFFFFFFFF)
private val OnyxlOnSurface = Color(0xFFFFFFFF)

private val OnyxColorScheme = darkColorScheme(
    primary = OnyxPrimary,
    secondary = OnyxSecondary,
    tertiary = OnyxTertiary,
    background = OnyxBackground,
    surface = OnyxSurface,
    onPrimary = OnyxlOnPrimary,
    onSecondary = OnyxlOnSecondary,
    onBackground = OnyxlOnBackground,
    onSurface = OnyxlOnSurface,
    primaryContainer = Color(0xFF002A14),
    onPrimaryContainer = Color(0xFF00FF87),
    surfaceVariant = Color(0xFF161616),
    onSurfaceVariant = Color(0xFFD1D1D1)
)

@Composable
fun MyApplicationTheme(
    themeName: String = "Cosmic Slate",
    content: @Composable () -> Unit
) {
    val colorScheme = when (themeName) {
        "Samsung Aura" -> AuraColorScheme
        "Emerald Horizon" -> EmeraldColorScheme
        "Sunset Scholar" -> SunsetColorScheme
        "Arctic Frost" -> ArcticColorScheme
        "Midnight Rose" -> RoseColorScheme
        "Onyx Jetblack" -> OnyxColorScheme
        else -> CosmicDarkColorScheme
    }

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}

