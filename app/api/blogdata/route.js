import { NextResponse } from "next/server";


export async function GET(request) {
    const data_all = require('../../_jsons/blog.json');
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    let number = searchParams.get("num");
    let mix;
    if (name == "home") {
        mix = {
            "img" : data_all.img.slice(0, 3),
            "title" : data_all.title.slice(0, 3),
            "des" : data_all.des.slice(0, 3),
            "url" : data_all.url.slice(0, 3)
        };
    } else {
        if (name == "data_blog") {
            mix = {
                "img" : data_all.img.slice(0, 6),
                "title" : data_all.title.slice(0, 6),
                "des" : data_all.des.slice(0, 6),
                "url" : data_all.url.slice(0, 6)
            };
        } else {
            if (name == "load") {
                mix = {
                    "img" : data_all.img.slice(parseInt(number), (parseInt(number)+3)),
                    "title" : data_all.title.slice(parseInt(number), (parseInt(number)+3)),
                    "des" : data_all.des.slice(parseInt(number), (parseInt(number)+3)),
                    "url" : data_all.url.slice(parseInt(number), (parseInt(number)+3))
                };
            }
        }
    }
    return NextResponse.json(mix);
}