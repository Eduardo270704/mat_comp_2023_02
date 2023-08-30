class veiculo {
    longitude: number;
    latitude: number;
    constructor(longitude: number, latitude: number) {
        this.longitude = longitude;
        this.latitude = latitude;
    }
    moverPara_lesm(longitude: number, latitude: number): void {
        this.longitude = longitude;
        this.latitude = latitude;
    }
}

class veiculoEletrico extends veiculo {
    bateria: number;
    constructor(longitude: number, latitude: number, bateria: number) {
        super(longitude, latitude);
        this.bateria = bateria;
    }
    carregar_lesm(carga: number): void {
        this.bateria += carga;
    }
}

class veiculoEletricoVoador extends veiculoEletrico {
    altitude: number;
    constructor(longitude: number, latitude: number, altitude: number, bateria: number) {
        super(longitude, latitude, bateria);
        this.altitude = altitude;
    }
    moverAltitude(altitude: number) {
        this.altitude = altitude;
    }
}

export { veiculo, veiculoEletrico, veiculoEletricoVoador };