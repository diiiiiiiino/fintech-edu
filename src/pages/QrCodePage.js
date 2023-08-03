import React from 'react';
import AppHeader from "../components/common/AppHeader";
import {QRCodeCanvas} from 'qrcode.react';
import {useLocation} from "react-router-dom";
import queryString from "query-string";

const QrCodePage = () => {
    const queryParams = useLocation().search;
    const parsed = queryString.parse(queryParams);
    const fintechUseNo = parsed.fintechUseNo;

    return (
        <div>
            <AppHeader title={"qr 코드"}></AppHeader>
            <QRCodeCanvas value={fintechUseNo} size={256} />
        </div>
    );
}

QrCodePage.propTypes = {};

export default QrCodePage;