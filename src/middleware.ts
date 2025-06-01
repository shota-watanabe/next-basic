import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // ファイル名にドット(image.jpgなど)は含まない
  if (!request.nextUrl.pathname.includes(".")) {
    console.log("ミドルウェア");
  }
  // リクエストを次の処理へ進める
  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/:path*"],
};
