import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import queryString from "query-string";
import AppHeader from "../components/common/AppHeader";
import axios from "axios";

const BalancePage = () => {
    let accessToken = "";
    let userSeqNo = "";

    const [balance, setBalance] = useState("아직없음");
    const queryParams = useLocation().search;
    const parsed = queryString.parse(queryParams);
    const fintechUseNum = parsed.fintechUseNo;

    const generateRandomNumberCode = () => {
        let code = '';
        const codeLength = 9;
        const digits = '0123456789';

        for (let i = 0; i < codeLength; i++) {
            const randomIndex = Math.floor(Math.random() * digits.length);
            code += digits.charAt(randomIndex);
        }

        return code;
    }

    const getTransId = () => {
        return "M202301751U" + generateRandomNumberCode();
    }

    useEffect(() => {
        console.log(localStorage.getItem("accessToken"));
        console.log(localStorage.getItem("userSeqNo"));
        console.log(fintechUseNum);
        console.log(getTransId());
        accessToken = localStorage.getItem("accessToken");
        userSeqNo = localStorage.getItem("userSeqNo");

        getBalance(accessToken, fintechUseNum, getTransId());
    }, []);

    const getBalance = (accessToken, fintechUseNum, transId) => {
        axios.get(`/v2.0/account/balance/fin_num?bank_tran_id=${transId}&fintech_use_num=${fintechUseNum}&tran_dtime=20230802000000`,
            { headers : { Authorization: `Bearer ${accessToken}` } })
            .then(({data}) => {
                console.log(data);
        })
    }

    return (
        <div>
            <AppHeader title="잔액조회"></AppHeader>
            {balance}
        </div>
    );
}

export default BalancePage;