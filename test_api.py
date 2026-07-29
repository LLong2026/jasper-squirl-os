import os
import requests
import json

token = os.environ.get("BASE44_SERVICE_TOKEN")
backend_url = os.environ.get("VITE_BASE44_BACKEND_URL", "https://base44.app")

headers = {
    "Authorization": f"Bearer {token}",
    "Content-Type": "application/json"
}

app_id = "68b288c7331aeeee3820cc2e"
entity_name = "SystemHealth"

# Try different URL structures
urls = [
    f"{backend_url}/api/apps/{app_id}/entities/{entity_name}/records",
    f"{backend_url}/api/apps/{app_id}/entities/{entity_name}",
    f"https://api.base44.com/api/apps/{app_id}/entities/{entity_name}"
]

for url in urls:
    try:
        print(f"Testing URL: {url}")
        res = requests.get(url, headers=headers, params={"limit": 1})
        print(f"Status: {res.status_code}")
        if res.status_code == 200:
            print("Success!")
            print(res.json()[:200] if isinstance(res.json(), list) else str(res.json())[:200])
            break
    except Exception as e:
        print(f"Error: {e}")
