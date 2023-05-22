import React, { useEffect, useState } from 'react';
import { MyProfile } from './MyProfile';

const Loading = () => {
    return(
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-80 w-80 border-b-[3px] border-s-4 border-t-[3px] border-cyan-400"></div>
        </div>

    )
}
export const Successful = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {/* Render your content based on the loading state */}
      {loading ? <Loading /> : <MyProfile />}
    </div>
  );
};
