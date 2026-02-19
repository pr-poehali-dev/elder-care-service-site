import json
import os
import urllib.request
import urllib.parse
from datetime import datetime, timezone, timedelta


CHAT_ID = "-1003860171995"

PAGE_NAMES = {
    "hero-form": "Главная — первый экран",
    "process-form": "Главная — как мы работаем",
    "trust-form": "Главная — почему нам доверяют",
    "final-form": "Главная — финальный блок",
}


def handler(event, context):
    """Отправка заявки с сайта в Telegram группу"""
    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, X-User-Id, X-Auth-Token, X-Session-Id",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    headers = {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"}

    raw_body = event.get("body", "{}")
    body = raw_body
    while isinstance(body, str):
        body = json.loads(body)
    if not isinstance(body, dict):
        body = {}
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    form_id = body.get("formId", "")

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"error": "name and phone required"}),
        }

    msk_tz = timezone(timedelta(hours=3))
    now = datetime.now(msk_tz).strftime("%d.%m.%Y %H:%M")
    page = PAGE_NAMES.get(form_id, form_id or "Неизвестная")

    text = (
        "📩 *Новая заявка*\n\n"
        f"📄 Страница: {page}\n"
        f"👤 Имя: {name}\n"
        f"📞 Телефон: {phone}\n"
        f"🕐 Дата и время: {now} (МСК)"
    )

    token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    if not token:
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"error": "bot token not configured"}),
        }

    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = json.dumps({
        "chat_id": CHAT_ID,
        "text": text,
        "parse_mode": "Markdown",
    }).encode("utf-8")

    req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"}, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            result = json.loads(resp.read().decode())
            if not result.get("ok"):
                return {
                    "statusCode": 500,
                    "headers": headers,
                    "body": json.dumps({"error": "telegram api error"}),
                }
    except Exception as e:
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"error": str(e)}),
        }

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True}),
    }