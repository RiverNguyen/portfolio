import { IconType } from "react-icons";
import {
    SiExpress,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiPusher,
    SiReact,
    SiStripe,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github: string;
    demo: string;
    image: string;
    available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Messenger Clone",
        description:
            "Một ứng dụng nhắn tin trực tuyến theo thời gian thực, cho phép người dùng trò chuyện với nhau qua các tin nhắn văn bản, hình ảnh.",
        technologies: [
            SiTypescript,
            SiReact,
            SiNextdotjs,
            SiTailwindcss,
            SiPusher,
            SiPrisma,
        ],
        techNames: [
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Pusher",
            "Prisma",
        ],
        techLinks: [
            "https://www.typescriptlang.org/",
            "https://reactjs.org/",
            "https://nextjs.org/",
            "https://tailwindcss.com/",
            "https://pusher.com/",
            "https://www.prisma.io/",
        ],
        github: "https://github.com/RiverNguyen/messenger-clone",
        demo: "https://river-messenger.vercel.app/",
        image: "/projects/messenger.png",
        available: true,
    },
    {
        id: 1,
        name: "E-commerce Website",
        description:
            "Một trang web thương mại điện tử với các chức năng cơ bản như xem sản phẩm, thêm vào giỏ hàng, thanh toán.",
        technologies: [
            SiTypescript,
            SiReact,
            SiNextdotjs,
            SiTailwindcss,
            SiPrisma,
            SiPostgresql,
            SiStripe,
        ],
        techNames: [
            "Typescript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Prisma",
            "PostgreSQL",
            "Stripe",
        ],
        techLinks: [
            "https://www.typescriptlang.org/",
            "https://reactjs.org/",
            "https://nextjs.org/",
            "https://tailwindcss.com/",
            "https://www.prisma.io/",
            "https://www.postgresql.org/",
            "https://stripe.com/",
        ],
        github: "https://github.com/RiverNguyen/e-commerce",
        demo: "https://ecommerce-store-river.vercel.app/",
        image: "/projects/ecommerce1.png",
        available: true,
    },
    {
        id: 2,
        name: "E-commerce Website",
        description:
            "Một trang web thương mại điện tử bán giày với các chức năng cơ bản như xem sản phẩm, thêm vào giỏ hàng, thanh toán.",
        technologies: [
            SiTypescript,
            SiReact,
            SiTailwindcss,
            SiNodedotjs,
            SiExpress,
            SiMongodb,
        ],
        techNames: [
            "Typescript",
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
        ],
        techLinks: [
            "https://www.typescriptlang.org/",
            "https://reactjs.org/",
            "https://nextjs.org/",
            "https://tailwindcss.com/",
            "https://nodejs.org/",
            "https://expressjs.com/",
            "https://www.mongodb.com/",
        ],
        github: "https://github.com/RiverNguyen/NHShop-Project",
        demo: "https://ecommerce-shoe-six.vercel.app/",
        image: "/projects/ecommerce2.png",
        available: true,
    },
];
