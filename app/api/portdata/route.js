import { NextResponse } from "next/server";


export async function GET(request) {
    const data_all = require('../../_jsons/work.json');
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    let number = searchParams.get("num");
    let mix;
    if (name == "mixhome") {
        mix = {
            "name" : data_all.name.slice(0, 3),
            "img" : data_all.img.slice(0, 3),
            "development" : data_all.development.slice(0, 3),
            "url" : data_all.url.slice(0, 3),
            "des" : data_all.des.slice(0, 3)
        };
    } else {
        if (name == "data_port") {
            mix = {
                "name" : data_all.name.slice(0, 6),
                "img" : data_all.img.slice(0, 6),
                "development" : data_all.development.slice(0, 6),
                "url" : data_all.url.slice(0, 6),
                "des" : data_all.des.slice(0, 6)
            };
        } else {
            if (name == "load") {
                mix = {
                    "name" : data_all.name.slice(parseInt(number), (parseInt(number)+3)),
                    "img" : data_all.img.slice(parseInt(number), (parseInt(number)+3)),
                    "development" : data_all.development.slice(parseInt(number), (parseInt(number)+3)),
                    "url" : data_all.url.slice(parseInt(number), (parseInt(number)+3)),
                    "des" : data_all.des.slice(parseInt(number), (parseInt(number)+3))
                };
            }
        }
    }
    return NextResponse.json(mix);
}