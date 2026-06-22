// ========================================================
// 1. BANCO DE DADOS CENTRAL
// ========================================================
const bancoDeTemas = {
    desenhos: {
        titulo: "Desenhos",
        placeholder: "Qual o desenho?",
        cores: { bg: "#fdf6e2", primaria: "#f4c430", hover: "#ffd54f", texto: "#3e2723", input: "#fffde7" },
        audios: [
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151244/msc1_sm1enn.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151244/msc2_hbrusl.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151244/msc3_pya1ih.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151245/msc4_phevth.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151246/msc5_jrk3i4.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151247/msc6_qrhiiq.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151247/msc7_sucll9.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151248/msc8_ny8ucr.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151249/msc9_eyvhfp.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151250/msc10_ay0fav.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151250/msc11_jpkgqe.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151251/msc12_tc3s00.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151252/msc13_bxvghu.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151257/msc14_doqmxi.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151258/msc15_v1re4v.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151317/msc16_m2vfbr.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151384/msc17_lqcrcs.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151384/msc18_ofx35p.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151385/msc19_qrhuou.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151386/msc20_oq4dzv.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151387/msc21_cc1gq1.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151388/msc22_okquwp.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151389/msc23_opkkgw.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151389/msc24_ckkxvl.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151391/msc25_wy2jmr.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151392/msc26_euoa7f.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151392/msc27_nrwb2z.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151398/msc28_bmrwsj.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151402/msc29_jgydqz.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151403/msc30_zs3gmq.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151409/msc31_xtetsz.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151414/msc32_woylif.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151415/msc33_slbuwy.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151433/msc34_pheasw.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782151434/msc35_o5zc5v.mp3"
        ],
        respostas: [
            "YXMgdGFydGFydWdhcyBuaW5qYXx0YXJ0YXJ1Z2FzIG5pbmphfHRlZW5hZ2UgbXV0YW50IG5pbmphIHR1cnRsZXM=",
            "YSB0dXJtYSBkbyBwZXJlcmV8dHVybWEgZG8gcGVyZXJl",
            "bWFuZGEgY2h1dmF8dG9wIGNhdA==",
            "b3Mgc2ltcHNvbnN8c2ltcHNvbnN8dGhlIHNpbXBzb25z",
            "YSBwYW50ZXJhIGNvciBkZSByb3NhfHBhbnRlcmEgY29yIGRlIHJvc2F8dGhlIHBpbmsgcGFudGhlcg==",
            "ZHUgZHVkdSBlIGVkdXxlZCBlZGQgbiBlZGR5",
            "ZG91ZyBmdW5uaWV8ZG91Zw==",
            "b3MgYmFja3lhcmRpZ2Fuc3xiYWNreWFyZGlnYW5zfHRoZSBiYWNreWFyZGlnYW5z",
            "Ym9iIGVzcG9uamF8c3BvbmdlYm9iIHNxdWFyZXBhbnRzfHNwb25nZWJvYg==",
            "c2Nvb2J5IGRvb3xzY29vYnkgZG9v",
            "YSB0dXJtYSBkYSBtb25pY2F8dHVybWEgZGEgbW9uaWNh",
            "Z2VvcmdlIG8gcmVpIGRhIGZsb3Jlc3RhfGdlb3JnZSBvZiB0aGUganVuZ2xl",
            "dGh1bmRlcmNhdHN8dGh1bmRlciBjYXRz",
            "dG9tIGUgamVycnl8dG9tIGFuZCBqZXJyeQ==",
            "b3MgcnVncmF0c3xydWdyYXRzfG9zIGFuamluaG9z",
            "aGFtdGFybw==",
            "YSBwZXF1ZW5hIHNlcmVpYXx0aGUgbGl0dGxlIG1lcm1haWQ=",
            "c2FrdXJhIGNhcmQgY2FwdG9yc3xjYXJkY2FwdG9yIHNha3VyYQ==",
            "dGltYW8gZSBwdW1iYXx0aW1vbiBhbmQgcHVtYmFh",
            "cmljayBlIG1vcnR5fHJpY2sgYW5kIG1vcnR5",
            "cGluZ3U=",
            "YSBob3JhIGRvIHJlY3JlaW98cmVjZXNz",
            "ZnJhbmtsaW4=",
            "b3MgamV0c29uc3xqZXRzb25zfHRoZSBqZXRzb25z",
            "dXJzaW5ob3MgY2FyaW5ob3Nvc3xjYXJlIGJlYXJz",
            "cGhpbmVhcyBlIGZlcmJ8cGhpbmVhcyBhbmQgZmVyYg==",
            "YXMgdHJpZ2VtZWFzfHRoZSB0cmlwbGV0cw==",
            "byBsYWJvcmF0b3JpbyBkZSBkZXh0ZXJ8bGFib3JhdG9yaW8gZGUgZGV4dGVyfGRleHRlcidzIGxhYm9yYXRvcnl8ZGV4dGVycyBsYWJvcmF0b3J5",
            "Y2F0ZG9nfGNhdCBkb2c=",
            "cGlua3kgZSBvIGNlcmVicm98cGlua3kgYW5kIHRoZSBicmFpbg==",
            "b3MgcGFkcmluaG9zIG1hZ2ljb3N8cGFkcmluaG9zIG1hZ2ljb3N8dGhlIGZhaXJseSBvZGRwYXJlbnRz",
            "b3MgY2FlemluaG9zIGRvIGNhbmlsfGNhZXppbmhvcyBkbyBjYW5pbHxwb3VuZCBwdXBwaWVz",
            "ZHJhZ29uIGJhbGwgZ3Q=",
            "b3Mgam92ZW5zIHRpdGFuc3xqb3ZlbnMgdGl0YW5zfHRlZW4gdGl0YW5zfG9zIGpvdmVucyB0aXRhc3xqb3ZlbnMgdGl0YXM=",
            "byBjbHViZSBkYXMgd2lueHxjbHViZSBkYXMgd2lueHx3aW54IGNsdWI="
        ]
    },
    novelas: {
        titulo: "Novelas",
        placeholder: "Qual a novela?",
        cores: { bg: "#fef8f5", primaria: "#d62828", hover: "#e63946", texto: "#4a0e10", input: "#fffaf8" },
        audios: [
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153848/msc1_hky1xg.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153848/msc2_qz11zy.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153848/msc3_lao44v.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153848/msc4_vnucpl.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153849/msc5_eyocog.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153849/msc6_w0anjw.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153849/msc7_abdfgg.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153849/msc8_ehpjhp.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153849/msc9_esgep0.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153850/msc10_cu1shp.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153850/msc11_l3rbwj.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153851/msc12_o8qjri.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153853/msc13_jwpsnv.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153855/msc14_xvk3pp.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153855/msc15_haic3d.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153856/msc16_ymbnsv.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153856/msc17_tybqbs.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153856/msc18_gmxanj.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153859/msc19_wocnkt.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153861/msc20_kgdz4q.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153862/msc21_gkofp7.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153863/msc22_eowlsc.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153863/msc23_oflonx.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153897/msc24_abeabt.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153898/msc25_oxdenc.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153898/msc26_dcffkw.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153898/msc27_ldg2hl.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153899/msc28_j9sgbg.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153905/msc29_lh8oar.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153905/msc30_tcf6zb.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153906/msc31_bdqzen.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153906/msc32_fqbzmr.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153906/msc33_yloiu4.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153966/msc34_te68lq.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782153984/msc35_bkl7i6.mp3"
        ],
        respostas: [
            "ZGEgY29yIGRvIHBlY2Fkbw==", 
            "ZXN0cmVsYSBndWlh", 
            "Ym9vZ2lvIG9vZ2llfGJvb2dpZSBvb2dpZQ==", 
            "YXZlbmlkYSBicmFzaWw=", 
            "YmVsYSBhIGZlaWF8YmVsYSwgYSBmZWlh", 
            "cGFyYWlzbw==", 
            "cG9yIGFtb3I=", 
            "byBvdXRybyBsYWRvIGRvIHBhcmFpc298b3V0cm8gbGFkbyBkbyBwYXJhaXNv", 
            "cGFudGFuYWw=", 
            "cGFzc2lvbmU=", 
            "YSBnYXRhIGNvbWV1fGdhdGEgY29tZXU=", 
            "Y2hlaWFzIGRlIGNoYXJtZQ==", 
            "Ym9tIHN1Y2Vzc28=", 
            "c2luaGEgbW9jYQ==", 
            "dmVyYW8gOTB8dmVyYW8gbm92ZW50YQ==", 
            "cG9ydG8gZG9zIG1pbGFncmVz", 
            "byBwcm9mZXRhfHByb2ZldGE=", 
            "ZXJhIHVtYSB2ZXo=", 
            "ZmxvcmliZWxsYQ==", 
            "ZHVhcyBjYXJhcw==", 
            "YSBlc2NyYXZhIGlzYXVyYXxlc2NyYXZhIGlzYXVyYQ==", 
            "Y2FtYSBkZSBnYXRv", 
            "Y2Fib2NsYQ==", 
            "cm9xdWUgc2FudGVpcm8=", 
            "cGUgbmEgamFjYQ==", 
            "cGVxdWVuYSB0cmF2ZXNzYQ==", 
            "byBiZWlqbyBkbyB2YW1waXJvfGJlaWpvIGRvIHZhbXBpcm8=", 
            "YWx0byBhc3RyYWw=", 
            "aXJtYW9zIGNvcmFnZW0=", 
            "byBzZXRpbW8gZ3VhcmRpYW98c2V0aW1vIGd1YXJkaWFv", 
            "dmVyZGFkZXMgc2VjcmV0YXM=", 
            "byByZWkgZG8gZ2Fkb3xyZWkgZG8gZ2Fkbw==",
            "YSBmYXZvcml0YXxmYXZvcml0YQ==", 
            "Y2FtaW5ob3MgZG8gY29yYWNhbw==", 
            "Y2hvY29sYXRlIGNvbSBwaW1lbnRh" 
        ]
    },
tv: {
        titulo: "Programas de TV",
        placeholder: "Qual o programa?",
        cores: { bg: "#f0f4f8", primaria: "#0984e3", hover: "#74b9ff", texto: "#192a56", input: "#ffffff" },
        audios: [
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154591/msc1_ehviby.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154591/msc2_iwnysq.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154591/msc3_g9k4ds.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154592/msc4_yqtwqg.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154592/msc5_sb6shx.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154592/msc6_uzoeti.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154592/msc7_bxqf3n.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154593/msc8_sxwpm9.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154595/msc9_tsiio5.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154595/msc10_xo67o8.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154596/msc11_cjllby.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154611/msc12_akugt4.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154632/msc13_rtdcd2.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154632/msc14_xzn7cy.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154633/msc15_uv2jsw.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154633/msc16_rxmofj.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154633/msc17_ghi0ot.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154633/msc18_vomcaq.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154641/msc19_aebf5l.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154641/msc20_gdkxq0.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154642/msc21_yfekpc.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154642/msc22_g1uslv.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154649/msc23_rb5tov.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154649/msc24_vgbdow.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154649/msc25_hqwizi.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154650/msc26_ma99ry.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154655/msc27_zrzft8.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154656/msc28_cxxrai.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154656/msc29_abhaxh.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154663/msc30_s77ccg.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154664/msc31_h5klva.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154664/msc32_jtnz9w.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154664/msc33_k5nzy9.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154665/msc34_u6qzlb.mp3",
            "https://res.cloudinary.com/dt2rhek8x/video/upload/v1782154673/msc35_iqxish.mp3"
        ],
        respostas: [
            "dmlkZW8gc2hvdw==", 
            "dG9tYSBsYSBkYSBjYQ==", 
            "ZnJpZW5kcw==", 
            "Y29jb3JpY28=", 
            "ZG9taW5nYW8gZG8gZmF1c3Rhb3xkb21pbmdhbw==", 
            "cGUgbmEgY292YQ==", 
            "dGFwYXMgZSBiZWlqb3M=", 
            "YWx0YXMgaG9yYXM=", 
            "Y2Fzb3MgZGUgZmFtaWxpYQ==",
            "Y2hhcG9saW58Y2hhcG9saW4gY29sb3JhZG8=", 
            "dHdvIGFuZCBhIGhhbGYgbWVufGRvaXMgaG9tZW5zIGUgbWVpbw==", 
            "YmFybmV5fGJhcm5leSBlIHNldXMgYW1pZ29z", 
            "ZGlzbmV5IGNsdWJ8ZGlzbmV5IGNydWp8Y3J1ag==", 
            "ZmFudGFzaWE=", 
            "Z2xvYm8gZXNwb3J0ZQ==", 
            "em9ycmEgdG90YWx8em9ycmE=", 
            "dHYgcGlyYXRh", 
            "YSBkaWFyaXN0YXxkaWFyaXN0YQ==", 
            "cGFzc2Egb3UgcmVwYXNzYQ==", 
            "Y2Fzc2lubyBkbyBjaGFjcmluaGF8Y2hhY3Jpbmhh", 
            "YXJub2xk", 
            "eHV4YSBubyBtdW5kbyBkYSBpbWFnaW5hY2FvfHh1eGE=", 
            "Y2FzYSBkb3MgYXJ0aXN0YXM=", 
            "bWFzdGVyY2hlZnxtYXN0ZXIgY2hlZg==", 
            "aG9qZSBlbSBkaWE=", 
            "dml2YSBvIGdvcmRv", 
            "c2FuZHkgZSBqdW5pb3I=", 
            "YSBncmFuZGUgZmFtaWxpYXxncmFuZGUgZmFtaWxpYQ==", 
            "c2l0aW8gZG8gcGljYXBhdSBhbWFyZWxvfHNpdGlv", 
            "YSB1c3VycGFkb3JhfHVzdXJwYWRvcmE=", 
            "bG9zdA==",
            "bWVnYSBzZW5oYQ==", 
            "cHJvZ3JhbWEgc2lsdmlvIHNhbnRvc3xzaWx2aW8gc2FudG9z", 
            "dGVsZXR1YmJpZXM=", 
            "b25lIHRyZWUgaGlsbA==" 
        ]
    }
};

// ========================================================
// 2. LÓGICA DE INICIALIZAÇÃO
// ========================================================
const urlParams = new URLSearchParams(window.location.search);
const temaAtual = urlParams.get('tema');

if (!temaAtual || !bancoDeTemas[temaAtual]) {
    window.location.href = "index.html";
}

const dadosDoTema = bancoDeTemas[temaAtual];
const chaveStorage = "game_pops_" + temaAtual;
let acertos = 0;
const totalMusicas = dadosDoTema.respostas.length;

// Aplicando as cores dinâmicas no CSS
document.documentElement.style.setProperty('--tema-bg', dadosDoTema.cores.bg);
document.documentElement.style.setProperty('--tema-primaria', dadosDoTema.cores.primaria);
document.documentElement.style.setProperty('--tema-hover', dadosDoTema.cores.hover);
document.documentElement.style.setProperty('--tema-texto', dadosDoTema.cores.texto);
document.documentElement.style.setProperty('--tema-input', dadosDoTema.cores.input);

function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

// ========================================================
// 3. CONSTRUÇÃO DOS CARDS
// ========================================================
const areaPlayers = document.getElementById("players");
const textoPontos = document.getElementById("pontos");
textoPontos.innerHTML = `0 / ${totalMusicas}`;

let audioElements = [];
let buttons = [];

for (let i = 0; i < totalMusicas; i++) {
    let audio = new Audio(dadosDoTema.audios[i]);
    audioElements.push(audio);

    let divCard = document.createElement("div");
    divCard.className = "song";
    divCard.id = "card" + i;
    divCard.innerHTML = `
        <span class="pop-num">${i + 1}</span>
        <button id="btnPlay${i}" class="play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
        <input type="text" id="palpite${i}" class="answer" placeholder="${dadosDoTema.placeholder}" autocomplete="off">
    `;
    areaPlayers.appendChild(divCard);

    let btnPlay = document.getElementById("btnPlay" + i);
    let inputPalpite = document.getElementById("palpite" + i);
    buttons.push(btnPlay);

    // Lógica do Play
    btnPlay.onclick = () => {
        if (audio.paused) {
            audioElements.forEach(a => a.pause());
            audio.play();
        } else { audio.pause(); }
    };

    // Verifica se já acertou antes (Salvo no Local Storage)
    if (localStorage.getItem(`${chaveStorage}_${i}`)) {
        const respostasAceitas = atob(dadosDoTema.respostas[i]).split('|');
        cardAcertou(i, respostasAceitas); 
    }

    // Lógica 1: Acerto Automático enquanto digita
    inputPalpite.addEventListener("input", () => {
        const digitado = normalizeString(inputPalpite.value);
        const respostasAceitas = atob(dadosDoTema.respostas[i]).split('|');

        if (respostasAceitas.includes(digitado)) {
            localStorage.setItem(`${chaveStorage}_${i}`, "ok");
            cardAcertou(i, respostasAceitas); // Manda o array todo para formatar os nomes
            audio.pause();
            
            // Pula para a próxima música QUE AINDA NÃO FOI RESPONDIDA
            for (let j = i + 1; j < totalMusicas; j++) {
                let proximoCard = document.getElementById("card" + j);
                if (!proximoCard.classList.contains("acertou")) {
                    buttons[j].click();
                    document.getElementById("palpite" + j).focus();
                    break;
                }
            }
        }
    });

    // Lógica 2: Erro ao apertar Enter
    inputPalpite.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            const digitado = normalizeString(inputPalpite.value);
            const respostasAceitas = atob(dadosDoTema.respostas[i]).split('|');
            
            if (!respostasAceitas.includes(digitado)) {
                inputPalpite.classList.remove("erro-feedback");
                void inputPalpite.offsetWidth;
                inputPalpite.classList.add("erro-feedback");
            }
        }
    });

    // Lógica 3: Erro ao perder o foco (Blur)
    inputPalpite.addEventListener("blur", () => {
        const digitado = normalizeString(inputPalpite.value);
        const respostasAceitas = atob(dadosDoTema.respostas[i]).split('|');
        
        if (digitado.length > 0 && !respostasAceitas.includes(digitado)) {
            inputPalpite.classList.remove("erro-feedback");
            void inputPalpite.offsetWidth;
            inputPalpite.classList.add("erro-feedback");
        }
    });
}

// ========================================================
// 4. FUNÇÃO DE TRANSFORMAÇÃO DO CARD (QUANDO ACERTA)
// ========================================================
function cardAcertou(index, arrayRespostas) {
    const card = document.getElementById("card" + index);
    
    if (!card.classList.contains("acertou")) {
        card.classList.add("acertou");

        // O nome principal sempre é a primeira opção da lista
        let nomePrincipal = arrayRespostas[0];
        let nomeOriginalHTML = "";

        // Se o desenho tiver nome original gringo na lista, a gente exibe ele menorzinho
        if (arrayRespostas.length > 1) {
            let ultimoNome = arrayRespostas[arrayRespostas.length - 1];
            // Filtro para não exibir se o original for igual ao BR ou se for só uma variação boba curta
            if (ultimoNome !== nomePrincipal && ultimoNome.length > 4) {
                nomeOriginalHTML = `<div class="nome-original">${ultimoNome}</div>`;
            }
        }

        // 💥 A MÁGICA: Substitui o botão e o input pelo novo visual
        card.innerHTML = `
            <span class="pop-num">${index + 1}</span>
            <div class="acerto-body">
                <div class="check-icon">✅</div>
                <div class="nome-br">${nomePrincipal}</div>
                ${nomeOriginalHTML}
            </div>
        `;

        acertos++;
        textoPontos.innerHTML = `${acertos} / ${totalMusicas}`;
        
        if (acertos === totalMusicas) {
            setTimeout(() => document.getElementById("modal-vitoria").classList.add("mostrar"), 500);
        }
    }
}

// Botão Lixeira
document.getElementById("btn-reset").onclick = () => {
    if (confirm("Resetar seu progresso nesta categoria?")) {
        for (let i = 0; i < totalMusicas; i++) localStorage.removeItem(`${chaveStorage}_${i}`);
        location.reload();
    }
};