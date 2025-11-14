---
title: Adding funds to Virtual Account
slug: /adding-funds-to-virtual-account
---

# Adding funds to Virtual Account

Virtual Accounts (VAs) are dedicated bank accounts created for routing customer funds. To add funds, instruct the payer to transfer to the assigned VA number and IFSC.

## Examples

Typical flow: Create VA → Share account details with payer → Monitor incoming transfer via webhook or `GET /client/fetchbalance`.

## Notes

VAs often trigger a webhook on successful credit. Confirm with `GET /client/va/{va_id}/balance` if you need an immediate programmatic check.
