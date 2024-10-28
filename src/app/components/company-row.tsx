import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
// import StatusLabel, { Status } from '@/app/components/status-label';
import StatusLabel, { Status } from './status-label';

export type CompanyRowProps = {
  id: number;
  category: string;
  company: string;
  status: Status;
  promotion: boolean;
  country: string;
  joinedData: string;
};

const labelByStatus = {
  [Status.Active]: 'Active',
  [Status.NotActive]: 'Not active',
  [Status.Pending]: 'Pending',
  [Status.Suspended]: 'Suspended',
};

export default function CompanyRow({
  id,
  category,
  company,
  status,
  promotion,
  country,
  joinedData,
}: CompanyRowProps) {
  return (
    <tr className="h-14 text-center text-gray-900 bg-white">
      <td className="text-xs font-medium text-blue-700 rounded-1 border-1-4 border-blue-700">
        {category}
      </td>
      <td>
        <a href={`/companies/${id}`}>{company}</a>
      </td>
      <td>
        <StatusLabel status={status}>{labelByStatus[status]}</StatusLabel>
      </td>
      <td>
        <div className="inline-flex items-center gap-1">
          <Image
            width={16}
            height={16}
            src={`/icons/${promotion ? 'check' : 'x-mark'}.svg`}
            alt="promotion icon"
          />
          <span
            className={clsx('text - sm font-medium', promotion ? 'text-gray-700' : 'text-red-700')}
          ></span>
        </div>
      </td>
    </tr>
  );
}
