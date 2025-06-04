'use client'

import { ReactNode } from "react";
import { ArrowFoward } from "../icons/ArrowFoward";
import { Spinner } from "../Spinner"
import { useFormStatus } from "react-dom"
import { Button } from "../Button";

export const SubmitButton = ({ children }: {children: ReactNode}) => {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" aria-disabled={pending}>
            {pending ? <Spinner /> : <>{children} <ArrowFoward /></>}
        </Button>
    )
}