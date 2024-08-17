import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[850px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={2000}
            width={2000}
            alt="patient"
            className="mb-12 h-15 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePluse All rights reserved
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admins Go here
            </Link>
          </div>
        </div>
      </section>

      <Image
              src="/assets/images/onboarding-img.png"
              height={3000}
              width={1500}
              alt="patient"
              className="side-img hidden sm:block max-w-[100%]"
/>
    </div>
  );
};

export default Home;
