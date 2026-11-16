"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { isSignedIn } from "@/lib/data/user";
import { signOut } from "@/lib/auth-actions/signOut";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginButton() {
    const [signedIn, setSignedIn] = useState(false); 

    useEffect(() => {
        const fetchSignedIn = async () => {
            const signedIn = await isSignedIn();
            setSignedIn(signedIn);
        }

        fetchSignedIn();
    }, []);

    if (signedIn) {
        return (
            <Button
                onClick={() => {
                    try {
                        signOut();
                        setSignedIn(false);
                        redirect("/");
                    } catch {
                        Swal.fire({
                            text: "Ocurrió un error al cerrar sesión, intente nuevamente",
                            icon: "error"
                        });
                    }
                }}
            >
                Cerrar sesión
            </Button>
        );
    }

    return (
        <Button
            onClick={() => {
                redirect("/ingresar");
            }}
        >
            Ingresar
        </Button>
    );
};