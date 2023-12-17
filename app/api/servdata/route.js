import { NextResponse } from "next/server";


export async function GET(request) {
    const dataall = require('../../_jsons/services.json');
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    let mix;
    if (name == "mixhome") {
        mix = {
            "webname" : dataall.WebNames.slice(0, 3),
            "cybername" : dataall.CyberNames.slice(0, 3),
            "webimg" : dataall.WebImg.slice(0, 3),
            "cyberimg" : dataall.CyberImg.slice(0, 3)
        };
    } else {
        if (name == "dataall") {
            mix = dataall;
        } else {
            mix = {};
        }
    }
    return NextResponse.json(mix);
}