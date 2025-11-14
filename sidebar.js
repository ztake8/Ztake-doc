module.exports = {
  docs: [
    'api-introduction',
    'authorization',
    'postman-collection',
    'adding-funds-to-virtual-account',
    'key-things-to-handle',
    'docs-ai-guide',
    {
      type: 'category',
      label: 'Ztake Payouts',
      items: [
        'ztake-payouts/index',
        'ztake-payouts/initiate-payout',
        'ztake-payouts/fetch-balance',
        'ztake-payouts/fetch-transaction-status',
        'ztake-payouts/get-statement',
        'ztake-payouts/connected-account-statement'
      ]
    },
    {
      type: 'category',
      label: 'Sub Virtual Accounts',
      items: [
        'sub-virtual-accounts/index',
        'sub-virtual-accounts/create-sub-va',
        'sub-virtual-accounts/fetch-sub-va',
        'sub-virtual-accounts/deactivate-sub-va',
        'sub-virtual-accounts/activate-sub-va',
        'sub-virtual-accounts/payout-from-sub-va',
        'sub-virtual-accounts/update-sub-va',
        'sub-virtual-accounts/list-sub-vas'
      ]
    },
    {
      type: 'category',
      label: 'Webhooks',
      items: [
        'webhooks/index',
        'webhooks/debit-webhook',
        'webhooks/credit-webhook',
        'webhooks/verification-webhook',
        'webhooks/pg-collection-callback'
      ]
    },
    {
      type: 'category',
      label: 'PG Collection (Scale UPI)',
      items: [
        'pg-collection-scale-upi/index',
        'pg-collection-scale-upi/create-static-vpa',
        'pg-collection-scale-upi/create-dynamic-vpa',
        'pg-collection-scale-upi/upi-collect',
        'pg-collection-scale-upi/create-pg-link',
        'pg-collection-scale-upi/query-list-transactions',
        'pg-collection-scale-upi/refund-payment',
        'pg-collection-scale-upi/create-upi-sub-merchant',
        'pg-collection-scale-upi/generate-qr-live-demo'
      ]
    },
    {
      type: 'category',
      label: 'Verification Stack',
      items: [
        'verification-stack/index',
        'verification-stack/bank-verification-pennydrop',
        'verification-stack/bank-verification-sync',
        'verification-stack/penniless-account-verification',
        'verification-stack/reverse-penny-drop',
        'verification-stack/pan-premium',
        'verification-stack/pan-lite',
        'verification-stack/aadhaar-digilocker-okyc',
        'verification-stack/verify-ifsc',
        'verification-stack/crif-credit-report',
        'verification-stack/experian-credit-report',
        'verification-stack/prefill-alternate-bureau',
        'verification-stack/verify-gst',
        'verification-stack/verify-gst-using-pan',
        'verification-stack/get-director-phone',
        'verification-stack/get-pan-using-phone',
        'verification-stack/verify-voter-id',
        'verification-stack/verify-indian-passport'
      ]
    },
    {
      type: 'category',
      label: 'BBPS (Bill Payments)',
      items: [
        'bbps/index',
        'bbps/list-categories',
        'bbps/select-biller',
        'bbps/fetch-bill',
        'bbps/make-bill-payment',
        'bbps/fetch-payment-status',
        'bbps/list-bbps-transactions'
      ]
    },
    {
      type: 'category',
      label: 'Other',
      items: [
        'other/upsell-cards-and-loans',
        'other/customer-support',
        'other/ip-getting-blacklisted',
        'other/whitelist-your-ip',
        'other/enach',
        'other/payouts-contact-management'
      ]
    }
  ],
};
