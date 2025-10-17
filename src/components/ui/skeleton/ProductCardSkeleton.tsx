import { JSX } from 'react';
import Skeleton from 'react-loading-skeleton';

export const ProductCardSkeleton = ():JSX.Element => {
  return (
    <div>
      <Skeleton height={366} style={{borderRadius: 18}} />
    </div>
  )
}