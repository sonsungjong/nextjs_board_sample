import Image from "next/image";
import styles from "./page.module.css";
import { connectDB } from "@/util/db";

export default async function Home() {
  // 오래 걸리는 작업은 건너뛰고 다음 코드 실행 (-> await으로 기다리게 변경)
  const db = (await connectDB).db("mydb"); // 데이터베이스 이름
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return (
    <div>
      <p>{result[0]?.title}</p>
      <p>{result[0]?.content}</p>
    </div>
  );
}

// app/layout.js : page.js를 감싸고 있는 main페이지
// app/page.js : Home페이지
// global.css : layout.js에 연결된 css
// page.module.css : page.js에 연결된 css

// app 폴더가 'http://localhost:3000/'
// http://localhost:3000/list --> app폴더에 list폴더 만들고 page.js

// 배포하려면 npm run build
// build폴더의 내용을 클라우드(AWS, vercel)에 업로드하고 npm run start
