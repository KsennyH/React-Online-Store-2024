import { JSX } from 'react';
import Skeleton from 'react-loading-skeleton';

export const NewsCardSkeleton = ():JSX.Element => {
  return (
    <div>
      <Skeleton height={654} style={{borderRadius: 18}} />
    </div>
  )
}