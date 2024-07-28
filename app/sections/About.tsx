import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"Giới thiệu qua về bản thân."}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody text="Tôi là Nguyễn Đình Giang, một Front-End Developer hiện đang theo học ngành Web Developer tại trường FPT Polytechnic. Với niềm đam mê lập trình và thiết kế giao diện người dùng, tôi đã tích lũy được nhiều kiến thức và kỹ năng qua quá trình học tập và làm việc thực tế." />

            <AnimatedBody
              delay={0.1}
              text="Tôi sở hữu kiến thức vững chắc về các công nghệ như ReactJS, NextJS, TypeScript, và TailwindCSS. Đồng thời, tôi cũng có khả năng làm việc với các hệ quản trị cơ sở dữ liệu như MongoDB và MySQL, và tích hợp các công cụ như Prisma và Pusher để xây dựng các ứng dụng web hiệu quả."
            />

            <AnimatedBody
              delay={0.2}
              text="Tôi luôn nỗ lực không ngừng để nâng cao kỹ năng của mình thông qua việc tham gia các dự án thực tế và học hỏi từ đồng nghiệp và mentor. Mục tiêu dài hạn của tôi là phát triển sự nghiệp lên các vị trí cao hơn như Senior Front End Developer hoặc Team Lead."
            />
            <AnimatedBody
              delay={0.3}
              text="Với tinh thần cầu tiến và khả năng làm việc nhóm tốt, tôi tin rằng mình có thể đóng góp tích cực vào sự phát triển của công ty và mang lại những giá trị thiết thực cho các dự án mà tôi tham gia."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
