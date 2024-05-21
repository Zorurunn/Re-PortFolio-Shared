import { ImageShadow } from "./ImageShadow";
import { Title } from "./Title";

export const AboutMe = (props) => {
  return (
    <div id="About">
      <Title title={"私について"}></Title>
      <div
        className={"grid grid-cols-[1fr] gap-[80px] md:grid-cols-[1fr_1fr]  "}
      >
        <div className="flex justify-center md:justify-start">
          <div className="w-[280px] h-[320px] md:w-[400px] md:h-[480px]">
            <ImageShadow
              border={"dark:border-[#111827]"}
              src={"/AboutMe.png"}
              alignPic={"md:left-[40px]"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="text-[24px]">プロフィール</div>
          <div className="flex flex-col gap-[16px]">
            <p>
              キャリアを変える必要があり、Web開発に転身しました。HTML、CSS、JavaScript、Node.js、さまざまなデータベースなど、フロントエンドとバックエンドの両方の技術を習得しました。常に新しい挑戦を受け入れ、最新のテクノロジーを学びながら、最先端のWebアプリケーションを構築しています。
            </p>
            <p>
              革新的な製品に取り組むことを楽しんでおり、仕事を探していますので、お気軽に連絡ください！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
