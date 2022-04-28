import React from "react";
import { Link } from "react-router-dom";

interface IMailToBtnProps {
  mailto: string,
  label: string
}

export default function MailToBtn({ mailto, label }: IMailToBtnProps) {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};