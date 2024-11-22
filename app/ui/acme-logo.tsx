import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';


export default function AcmeLogo() {
  return (
      <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
        {/* <CurrencyDollarIcon className="h-40 w-40 rotate-[15deg]" />   */}
        <p className="text-[20px] md:text-[25px] ">Cash Advance Management System</p>
      </div>
  );
}
