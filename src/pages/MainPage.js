import React, { useState, useEffect } from "react";
import MainAccountCard from "../components/main/MainAccountCard";
import AppHeader from "../components/common/AppHeader";
import axios from "axios";

const MainPage = () => {
  let accessToken = "";
  let userSeqNo = "";
  let [accountList, setAccountList] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));
    console.log(localStorage.getItem("userSeqNo"));
    accessToken = localStorage.getItem("accessToken");
    userSeqNo = localStorage.getItem("userSeqNo");
    getAccountList();
  }, []);

  const getAccountList = () => {
    axios.get(`/v2.0/user/me?user_seq_no=${userSeqNo}`, { headers: { Authorization: `Bearer ${accessToken}` } })
        .then(({data}) => {
          accountList = data.res_list;
          setAccountList(accountList);
        });
  };
  return (
    <div>
      {accountList.map((account, index) => {
        return (
          <div key={account.bank_name + index}>
            <AppHeader title={"메인"} />
            <MainAccountCard
              bankName={account.bank_name}
              fintechUseNo={account.fintech_use_num}
            ></MainAccountCard>
          </div>
        );
      })}
    </div>
  );
};

export default MainPage;
