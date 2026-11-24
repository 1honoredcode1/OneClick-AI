"use client";

import InitialForm from "@/components/dashboard/initialform";
import { useEffect, useState } from "react";

const Page = () => {
  const [isMetaDataAvailable, setIsMetaDataAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMetaData = async () => {
      const response = await fetch("/api/metadata/fetch");
      const data = await response.json();
      setIsMetaDataAvailable(data.exists);
      setIsLoading(false);
    };
    fetchMetaData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex-1 flex w-full items-center justify-center p-4" />
    );
  }

  return (
    <div className="flex-1 flex w-full">
      {!isMetaDataAvailable ? (
        <div className="w-full flex items-center justify-center p-4 min-h-screen">
          <InitialForm />
        </div>
      ) : (
        <div className="w-full p-8 md:p-12">
          <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
          <p className="mt-2 text-zinc-400">
            Your account setup is complete.
          </p>
        </div>
      )}
    </div>
  );
};

export default Page;
