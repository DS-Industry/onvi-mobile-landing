import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
    const appleAppAssociation = {
        "applinks": {
            "apps": [],
            "details": [
                {
                    "appID": "4924V9U345.org.reactjs.native.example.Onvi",
                    "paths": [ "/home/*", "/settings/*" ]
                }
            ]
        }
    }

    return NextResponse.json(appleAppAssociation)
}
