import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center space-y-14 px-4 py-8">
      <header className="flex w-full items-center justify-between py-4">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-auto"
          />
        </Link>

        <p className="text-lg font-semibold">Admin Dashboard</p>
      </header>

      <main className="flex w-full flex-col items-center space-y-8">
        <section className="w-full text-center space-y-4">
          <h1 className="text-3xl font-bold">Welcome Admin</h1>
          <p className="text-white-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="flex w-full justify-around space-x-4">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <section className="w-full">
          <DataTable columns={columns} data={appointments.documents} />
        </section>
      </main>
    </div>
  );
};

export default AdminPage;