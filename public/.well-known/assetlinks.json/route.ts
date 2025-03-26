import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
    const assetLinks = [{
        "relation": ["delegate_permission/common.handle_all_urls"],
        "target": {
            "namespace": "android_app",
            "package_name": "com.onvimobile.staging",
            "sha256_cert_fingerprints":
                ["BA:AB:42:26:61:86:09:8A:B6:48:60:15:6F:09:09:48:30:B5:25:CF:CE:6D:EF:1B:A0:D4:88:EA:DE:32:A1:DE"]
        }
    }]

    return NextResponse.json(assetLinks)
}
