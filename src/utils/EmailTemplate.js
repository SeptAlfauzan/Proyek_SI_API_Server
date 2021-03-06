class EmailTemplate {
    static verificationTemplate(name, code) {
        return `
            <!DOCTYPE HTML
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                xmlns:o="urn:schemas-microsoft-com:office:office">
            <head>
                <!--[if gte mso 9]>
            <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="x-apple-disable-message-reformatting">
                <!--[if !mso]><!-->
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <!--<![endif]-->
                <title></title>
                <style type="text/css">
                    @media only screen and (min-width: 670px) {
                        .u-row {
                            width: 650px !important;
                        }

                        .u-row .u-col {
                            vertical-align: top;
                        }

                        .u-row .u-col-100 {
                            width: 650px !important;
                        }

                    }

                    @media (max-width: 670px) {
                        .u-row-container {
                            max-width: 100% !important;
                            padding-left: 0px !important;
                            padding-right: 0px !important;
                        }

                        .u-row .u-col {
                            min-width: 320px !important;
                            max-width: 100% !important;
                            display: block !important;
                        }

                        .u-row {
                            width: calc(100% - 40px) !important;
                        }

                        .u-col {
                            width: 100% !important;
                        }

                        .u-col>div {
                            margin: 0 auto;
                        }
                    }

                    body {
                        margin: 0;
                        padding: 0;
                    }

                    table,
                    tr,
                    td {
                        vertical-align: top;
                        border-collapse: collapse;
                    }

                    p {
                        margin: 0;
                    }

                    .ie-container table,
                    .mso-container table {
                        table-layout: fixed;
                    }

                    * {
                        line-height: inherit;
                    }

                    a[x-apple-data-detectors='true'] {
                        color: inherit !important;
                        text-decoration: none !important;
                    }

                    table,
                    td {
                        color: #000000;
                    }
                </style>
                <!--[if !mso]><!-->
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet"
                    type="text/css">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet"
                    type="text/css">
                <link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet" type="text/css">
                <!--<![endif]-->
            </head>

            <body class="clean-body u_body"
                style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #b8b5ff;color: #000000">
                <!--[if IE]><div class="ie-container"><![endif]-->
                <!--[if mso]><div class="mso-container"><![endif]-->
                <table
                    style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #b8b5ff;width:100%"
                    cellpadding="0" cellspacing="0">
                    <tbody>
                        <tr style="vertical-align: top">
                            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #b8b5ff;"><![endif]-->

                                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                    <div class="u-row"
                                        style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                                        <div
                                            style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:650px;"><tr style="background-color: transparent;"><![endif]-->

                                            <!--[if (mso)|(IE)]><td align="center" width="650" style="width: 650px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                                            <div class="u-col u-col-100"
                                                style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                                <div
                                                    style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                    <!--[if (!mso)&(!IE)]><!-->
                                                    <div
                                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                        <!--<![endif]-->

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                            cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:40px 10px 10px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <h1
                                                                            style="margin: 0px; color: #7868e6; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Montserrat',sans-serif; font-size: 28px;">
                                                                            <strong>servis.no</strong>
                                                                        </h1>

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        <!--[if (!mso)&(!IE)]><!-->
                                                    </div>
                                                    <!--<![endif]-->
                                                </div>
                                            </div>
                                            <!--[if (mso)|(IE)]></td><![endif]-->
                                            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                        </div>
                                    </div>
                                </div>

                                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                    <div class="u-row"
                                        style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                                        <div
                                            style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:650px;"><tr style="background-color: transparent;"><![endif]-->

                                            <!--[if (mso)|(IE)]><td align="center" width="650" style="width: 650px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                            <div class="u-col u-col-100"
                                                style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                                <div style="width: 100% !important;">
                                                    <!--[if (!mso)&(!IE)]><!-->
                                                    <div
                                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                        <!--<![endif]-->

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                            cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <table width="100%" cellpadding="0" cellspacing="0"
                                                                            border="0">
                                                                            <tr>
                                                                                <td style="padding-right: 0px;padding-left: 0px;"
                                                                                    align="center">

                                                                                    <img align="center" border="0" src="cid:image-1"
                                                                                        alt="border" title="border"
                                                                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 650px;"
                                                                                        width="650" />

                                                                                </td>
                                                                            </tr>
                                                                        </table>

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        <!--[if (!mso)&(!IE)]><!-->
                                                    </div>
                                                    <!--<![endif]-->
                                                </div>
                                            </div>
                                            <!--[if (mso)|(IE)]></td><![endif]-->
                                            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                        </div>
                                    </div>
                                </div>

                                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                    <div class="u-row"
                                        style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f1f3f5;">
                                        <div
                                            style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:650px;"><tr style="background-color: #f1f3f5;"><![endif]-->

                                            <!--[if (mso)|(IE)]><td align="center" width="650" style="width: 650px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                                            <div class="u-col u-col-100"
                                                style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                                <div
                                                    style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                    <!--[if (!mso)&(!IE)]><!-->
                                                    <div
                                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                        <!--<![endif]-->

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                            cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <table width="100%" cellpadding="0" cellspacing="0"
                                                                            border="0">
                                                                            <tr>
                                                                                <td style="padding-right: 0px;padding-left: 0px;"
                                                                                    align="center">

                                                                                    <img align="center" border="0" src="cid:image-2"
                                                                                        alt="" title=""
                                                                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 630px;"
                                                                                        width="630" />

                                                                                </td>
                                                                            </tr>
                                                                        </table>

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        <!--[if (!mso)&(!IE)]><!-->
                                                    </div>
                                                    <!--<![endif]-->
                                                </div>
                                            </div>
                                            <!--[if (mso)|(IE)]></td><![endif]-->
                                            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                        </div>
                                    </div>
                                </div>

                                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                    <div class="u-row"
                                        style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f1f3f5;">
                                        <div
                                            style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:650px;"><tr style="background-color: #f1f3f5;"><![endif]-->

                                            <!--[if (mso)|(IE)]><td align="center" width="650" style="width: 650px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                                            <div class="u-col u-col-100"
                                                style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                                <div
                                                    style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                    <!--[if (!mso)&(!IE)]><!-->
                                                    <div
                                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                        <!--<![endif]-->

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                            cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:40px 10px 10px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <h1
                                                                            style="margin: 0px; color: #333333; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Open Sans',sans-serif; font-size: 30px;">
                                                                            <strong>VERIFIKASI AKUN ANDA</strong>
                                                                        </h1>

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                            cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div
                                                                            style="color: #5e5e5e; line-height: 170%; text-align: center; word-wrap: break-word;">
                                                                            <p style="font-size: 14px; line-height: 170%;"><span
                                                                                    style="font-family: Raleway, sans-serif; font-size: 16px; line-height: 27.2px;">Halo
                                                                                    ${name}, masukkan kode berikut pada halaman
                                                                                    registrasi di aplikasi servis.no</span></p>
                                                                        </div>

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                            cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 30px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">
                                                                        <h1
                                                                            style="margin: 0px; color: #722b1d; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Open Sans',sans-serif; font-size: 25px;">
                                                                            ${code}
                                                                        </h1>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if (!mso)&(!IE)]><!-->
                                                    </div>
                                                    <!--<![endif]-->
                                                </div>
                                            </div>
                                            <!--[if (mso)|(IE)]></td><![endif]-->
                                            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                        </div>
                                    </div>
                                </div>

                                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                    <div class="u-row"
                                        style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                                        <div
                                            style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:650px;"><tr style="background-color: transparent;"><![endif]-->

                                            <!--[if (mso)|(IE)]><td align="center" width="650" style="width: 650px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                                            <div class="u-col u-col-100"
                                                style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                                <div
                                                    style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                    <!--[if (!mso)&(!IE)]><!-->
                                                    <div
                                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                        <!--<![endif]-->

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                            cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <table width="100%" cellpadding="0" cellspacing="0"
                                                                            border="0">
                                                                            <tr>
                                                                                <td style="padding-right: 0px;padding-left: 0px;"
                                                                                    align="center">

                                                                                    <img align="center" border="0" src="cid:image-3"
                                                                                        alt="border" title="border"
                                                                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 650px;"
                                                                                        width="650" />

                                                                                </td>
                                                                            </tr>
                                                                        </table>

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        <!--[if (!mso)&(!IE)]><!-->
                                                    </div>
                                                    <!--<![endif]-->
                                                </div>
                                            </div>
                                            <!--[if (mso)|(IE)]></td><![endif]-->
                                            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                        </div>
                                    </div>
                                </div>

                                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                    <div class="u-row"
                                        style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #6e6e6e;">
                                        <div
                                            style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:650px;"><tr style="background-color: #6e6e6e;"><![endif]-->

                                            <!--[if (mso)|(IE)]><td align="center" width="650" style="width: 650px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                                            <div class="u-col u-col-100"
                                                style="max-width: 320px;min-width: 650px;display: table-cell;vertical-align: top;">
                                                <div
                                                    style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                    <!--[if (!mso)&(!IE)]><!-->
                                                    <div
                                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                        <!--<![endif]-->

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                            cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 30px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div
                                                                            style="color: #ffffff; line-height: 190%; text-align: center; word-wrap: break-word;">
                                                                            <p style="font-size: 14px; line-height: 190%;"><span
                                                                                    style="font-family: Raleway, sans-serif; font-size: 14px; line-height: 26.6px;">You're
                                                                                    receiving this email because you asked us about
                                                                                    regular newsletter.</span></p>
                                                                            <p style="font-size: 14px; line-height: 190%;"><span
                                                                                    style="font-family: Raleway, sans-serif; font-size: 14px; line-height: 26.6px;">&copy;2022
                                                                                    servis.no</span></p>
                                                                        </div>

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        <!--[if (!mso)&(!IE)]><!-->
                                                    </div>
                                                    <!--<![endif]-->
                                                </div>
                                            </div>
                                            <!--[if (mso)|(IE)]></td><![endif]-->
                                            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                        </div>
                                    </div>
                                </div>

                                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!--[if mso]></div><![endif]-->
                <!--[if IE]></div><![endif]-->
            </body>

            </html>
            `
    }

    static invoiceTemplate(name, QR) {
        return `
        < !DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" >
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
        <!--[if gte mso 9]>
        <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG />
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
        <title></title>
        <style type="text/css">
        @media only screen and (min-width: 620px) {
        .u - row {
        width: 600px !important;
        }
        .u-row .u-col {
        vertical - align: top;
        }

        .u-row .u-col-100 {
        width: 600px !important;
        }

        }

        @media (max-width: 620px) {
        .u - row - container {
        max - width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
        }
        .u-row .u-col {
        min - width: 320px !important;
        max-width: 100% !important;
        display: block !important;
        }
        .u-row {
        width: calc(100% - 40px) !important;
        }
        .u-col {
        width: 100% !important;
        }
        .u-col > div {
        margin: 0 auto;
        }
        }
        body {
        margin: 0;
        padding: 0;
        }

        table,
        tr,
        td {
        vertical - align: top;
        border-collapse: collapse;
        }

        .ie-container table,
        .mso-container table {
        table - layout: fixed;
        }

        * {
        line - height: inherit;
        }

        a[x-apple-data-detectors='true'] {
        color: inherit !important;
        text-decoration: none !important;
        }

        table, td {color: #000000; } a {color: #0000ee; text-decoration: underline; } @media (max-width: 480px) {#u_content_image_1.v - container - padding - padding {padding: 25px 10px 10px !important; } #u_content_image_1 .v-src-width {width: auto !important; } #u_content_image_1 .v-src-max-width {max - width: 32% !important; } #u_content_image_1 .v-text-align {text - align: center !important; } #u_content_heading_2 .v-container-padding-padding {padding: 50px 40px 30px !important; } #u_content_heading_2 .v-font-size {font - size: 58px !important; } #u_content_image_2 .v-container-padding-padding {padding: 10px 10px 30px !important; } #u_content_image_2 .v-src-width {width: 100% !important; } #u_content_image_2 .v-src-max-width {max - width: 100% !important; } #u_content_heading_1 .v-font-size {font - size: 29px !important; } #u_content_heading_1 .v-line-height {line - height: 150% !important; } }
        </style>



        <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->

        </head>

        <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
        <tbody>
        <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->


        <div class="u-row-container" style="padding: 0px;background-color: #a2c1d6">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #bfedd2;">
        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #a2c1d6;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #bfedd2;"><![endif]-->

        <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
        <div style="width: 100% !important;">
        <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->

        <table id="u_content_image_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
        <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:22px 10px 20px 50px;font-family:arial,helvetica,sans-serif;" align="left">

        <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
        <a href="https://unlayer.com" target="_blank">
        <img align="center" border="0" src="images/image-1.png" alt="Logo" title="Logo" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 20%;max-width: 108px;" width="108" class="v-src-width v-src-max-width" />
        </a>
        </td>
        </tr>
        </table>

        </td>
        </tr>
        </tbody>
        </table>

        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
        </div>
        </div>



        <div class="u-row-container" style="padding: 0px;background-color: #a2c1d6">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #a2c1d6;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->

        <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
        <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
        <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

        <table id="u_content_heading_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
        <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:50px 40px 10px;font-family:arial,helvetica,sans-serif;" align="left">

        <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #2f3448; line-height: 120%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Montserrat',sans-serif; font-size: 72px;">
        <strong>Invoice Payment</strong>
        </h1>

        </td>
        </tr>
        </tbody>
        </table>

        <table id="u_content_image_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
        <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

        <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">

        <img align="center" border="0" src="${QR}" alt="Hero Image" title="Hero Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 70%;max-width: 406px;" width="406" class="v-src-width v-src-max-width" />

        </td>
        </tr>
        </table>

        </td>
        </tr>
        </tbody>
        </table>

        <table id="u_content_heading_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
        <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 40px 30px;font-family:arial,helvetica,sans-serif;" align="left">

        <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #2f3448; line-height: 190%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Montserrat',sans-serif; font-size: 35px;">
        Hello ${name}, please scan QR code on above to proceed your transaction
        </h1>

        </td>
        </tr>
        </tbody>
        </table>

        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
        </div>
        </div>


        <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        </td>
        </tr>
        </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
        </body>

        </html>

        `
    }
}

module.exports = EmailTemplate;