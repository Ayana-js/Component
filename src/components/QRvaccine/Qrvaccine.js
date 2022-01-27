<QRCode
    onClick={() => setActive(false)}
    value={qrLink} style={{ marginRight: 10, marginBottom: 20, width: 200, height: 200 }}
    bgColor={"#ffffff"}
    fgColor={"#007d82"}
    imageSettings={{
        src: logo,
        x: null,
        y: null,
        height: 30,
        width: 30,
        excavate: true,
    }}
/>