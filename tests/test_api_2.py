import os
import requests

token = os.environ.get("BASE44_SERVICE_TOKEN")
api_base = "https://api.base44.com"

# The authorization header might just be the token, or Bearer token
headers_list = [
    {"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
    {"Authorization": token, "Content-Type": "application/json"}
]

app_id = "68b288c7331aeeee3820cc2e"
entity_name = "SystemHealth"

for i, headers in enumerate(headers_list):
    print(f"Testing headers combo {i}")
    urls = [
        f"{api_base}/api/apps/{app_id}/entities/{entity_name}/records",
        f"{api_base}/api/apps/{app_id}/entities/{entity_name}",
        f"https://base44.app/api/apps/{app_id}/entities/{entity_name}/records",
        f"https://base44.app/api/apps/{app_id}/entities/{entity_name}"
    ]
    for url in urls:
        try:
            res = requests.get(url, headers=headers, params={"limit": 1})
            print(f"URL: {url} -> Status: {res.status_code}")
            if res.status_code == 200:
                print("SUCCESS!")
                print(res.json()[:200])
        except Exception as e:
            print(f"Error: {e}")
