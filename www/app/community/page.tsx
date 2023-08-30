import Container from "@/app/_components/common/Container";
import Divider from "@/app/_components/common/Divider";
import GradientButton from "@/app/_components/common/GradientButton";
import Heading from "@/app/_components/common/Heading";
import PageHeader from "@/app/_components/common/PageHeader";
import Image from "next/image";
import TemplateSearch from "../templates/TemplateSearch";
import loadTemplates from "../templates/dataFetcher";
import Link from "next/link";
import Tutorials from "./_components/Tutorials";
import Community from "./_components/Community";

export default async function Home() {
  const templates = await loadTemplates();
  return (
    <Container>
      <div className="flex gap-5 items-center flex-col mb-[184px] w`">
        <PageHeader
          title={
            <div className="flex flex-row">
              We
              <Image
                src="/heart.svg"
                alt="orange 8-bit heart"
                width={98}
                height={98}
              />
              developers
            </div>
          }
          subtitle={
            <>
              <div>
                Join the Nile community to learn, share and collaborate with
                thousands of other developers:{" "}
              </div>
              <div>
                Together, we will build the best platform to build and
                accelerate SaaS
              </div>
            </>
          }
          color="white"
        />
      </div>
      <div className="flex flex-row w-full justify-between gap-10">
        <Link href="https://github.com/niledatabase/niledatabase">
          <div className="flex flex-col gap-10 itemDivider p-8">
            <Image
              src="/github-text.svg"
              alt="github text in black and white gradient"
              width={122}
              height={34}
              className="z-10 relative"
            />
            <div className="bg-gradient-white bg-clip-text text-transparent text-center text-[20px] z-10 relative w-[320px]">
              Join Github discussions for roadmap and issues
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="flex flex-col gap-10 itemDivider p-8">
            <Image
              src="/discord.svg"
              alt="github text in black and white gradient"
              width={189}
              height={52}
              className="z-10 relative"
            />
            <div className="bg-gradient-white bg-clip-text text-transparent text-center text-[20px] z-10 relative w-[320px]">
              Participate in online conversations and forums
            </div>
          </div>
        </Link>
        <Link href="https://x.com/niledatabase">
          <div className="flex flex-col gap-10 itemDivider p-8">
            <Image
              src="/x.svg"
              alt="github text in black and white gradient"
              width={47}
              height={44}
              className="z-10 relative"
            />
            <div className="bg-gradient-white bg-clip-text text-transparent text-center text-[20px] z-10 relative w-[280px]">
              Follow us on X to learn and network
            </div>
          </div>
        </Link>
      </div>
      <Divider />
      <div className="flex gap-4 flex-col">
        <Heading text="Templates" textAlign="left" />
        <div className="flex flex-row justify-between pb-10 w-full">
          <div className="text-xl opacity-60 w-1/2">
            Get started with one of the hundreds of Nile templates built by the
            community. Contribute your own template to help others.
          </div>
          <GradientButton href="/templates" variant="soft">
            <Image
              src="/icons/plus.svg"
              alt="orange plus sign"
              width={24}
              height={24}
            />
            <span className="pl-2 bg-gradient-white bg-clip-text text-transparent subpixel-antialiased text-[16px]">
              Add Your Template
            </span>
          </GradientButton>
        </div>
        <TemplateSearch templates={templates} searchEnabled={false} />
        <div className="flex justify-center mt-10">
          <GradientButton href="/templates" variant="soft">
            <Image
              src="/icons/templates.svg"
              alt="book cover"
              width={24}
              height={24}
            />
            <span className="pl-2 bg-gradient-white bg-clip-text text-transparent subpixel-antialiased text-[16px]">
              Browse more templates
            </span>
          </GradientButton>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-4 justify-center w-full">
        <Tutorials />
      </div>
      <Divider />
      <div className="flex flex-col gap-4 justify-center w-full">
        <Community />
      </div>
    </Container>
  );
}
