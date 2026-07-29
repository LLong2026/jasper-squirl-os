import os
import requests

token = os.environ.get("BASE44_SERVICE_TOKEN")
backend_url = os.environ.get("VITE_BASE44_BACKEND_URL", "https://base44.app")

headers = {
    "Authorization": f"Bearer {token}",
    "Content-Type": "application/json",
    "X-App-Id": "69b57683f2623117603736bc"  # current app id
}

app_id = "68b288c7331aeeee3820cc2e"
entity_name = "SystemHealth"

url = f"{backend_url}/api/apps/{app_id}/entities/{entity_name}"
print(f"URL: {url}")
try:
    res = requests.get(url, headers=headers, params={"limit": 1})
    print(f"Status: {res.status_code}")
    print(f"Response: {res.text[:300]}")
except Exception as e:
    print(f"Error: {e}")
