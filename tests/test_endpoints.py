import os
import requests

token = os.environ.get("BASE44_SERVICE_TOKEN")
backend_url = os.environ.get("VITE_BASE44_BACKEND_URL", "https://base44.app")

headers = {
    "Authorization": f"Bearer {token}",
    "Content-Type": "application/json"
}

endpoints = [
    f"{backend_url}/api/apps",
    f"{backend_url}/api/user/apps",
    f"{backend_url}/api/user-apps",
    f"{backend_url}/api/my-apps",
    "https://api.base44.com/api/apps",
    "https://api.base44.com/api/user/apps"
]

for url in endpoints:
    try:
        print(f"Testing GET: {url}")
        res = requests.get(url, headers=headers)
        print(f"  Status: {res.status_code}")
        if res.status_code == 200:
            print(f"  SUCCESS! Response type: {type(res.json())}")
            data = res.json()
            if isinstance(data, list):
                print(f"  Found {len(data)} items.")
                print(f"  First item keys: {list(data[0].keys()) if data else 'empty'}")
            else:
                print(f"  Keys: {list(data.keys())}")
    except Exception as e:
        print(f"  Error: {e}")
