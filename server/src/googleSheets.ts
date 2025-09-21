import { google } from 'googleapis'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

function getAuth() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n')

  if (!clientEmail || !privateKey) {
    throw new Error('Missing GOOGLE_CLIENT_EMAIL or GOOGLE_PRIVATE_KEY env')
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: SCOPES,
  })
}

export async function appendLeadRow(values: (string | null)[]) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID!;
  const tab = process.env.SHEETS_TAB || 'Leads';

  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${tab}!A:K`,
      valueInputOption: 'RAW',
      requestBody: { values: [values] },
    });
  } catch (e: any) {
    console.error('Sheets append error:', e?.response?.data || e?.message || e);
    throw e;
  }
}

// add near the top
const TOFU_TAB = process.env.SHEETS_TAB_TOFU || 'TOFU_Leads';

// add this function
export async function appendTofuRow(values: (string | null)[]) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
  if (!spreadsheetId) throw new Error('Missing GOOGLE_SHEETS_ID');

  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  // A:I = 9 columns (same order as the header above)
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${TOFU_TAB}!A:I`,
    valueInputOption: 'RAW',
    requestBody: { values: [values] },
  });
}
