import { JSX } from "react";
import { getPagination, setCurrentPage } from "@/features/product/model";
import { PaginationButtons } from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/lib";

export function ProductPagination({ totalPages }: { totalPages: number }): JSX.Element {

    const dispatch = useAppDispatch();
    const pagination = useAppSelector((state) => getPagination(state));
    const { currentPage } = pagination;

    const handleChangePage = (page: number) => {
        dispatch(
            setCurrentPage({ ...pagination, currentPage: page })
        )
    }

    return(
        <PaginationButtons 
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handleChangePage}
        />
    );
}