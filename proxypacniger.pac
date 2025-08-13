
function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    // Conexión directa para archivos grandes o multimedia
    if (shExpMatch(url, "*.zip") || shExpMatch(url, "*.rar") || shExpMatch(url, "*.7z") ||
        shExpMatch(url, "*.tar") || shExpMatch(url, "*.gz") || shExpMatch(url, "*.iso") ||
        shExpMatch(url, "*.exe") || shExpMatch(url, "*.msi") || shExpMatch(url, "*.mp4") ||
        shExpMatch(url, "*.mkv") || shExpMatch(url, "*.avi") || shExpMatch(url, "*.mov") ||
        shExpMatch(url, "*.mp3") || shExpMatch(url, "*.flac") || shExpMatch(url, "*.wav") ||
        shExpMatch(url, "*.pdf")) {
        return "DIRECT";
    }

    // Todo lo demás pasa por el proxy
    return "PROXY 193.42.119.250:3156";
