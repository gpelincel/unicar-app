import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  // Função para buscar o endereço pelo CEP usando ViaCEP
// Função para buscar o endereço pelo CEP usando ViaCEP
async getAddressByCEP(cep: string){
  try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
          throw new Error(`Erro na busca do CEP: ${response.statusText}`);
      }
      const data = await response.json();

      if (!data.erro) {
          return `${data.logradouro}, ${data.localidade}, ${data.uf}`;
      }
      console.error("CEP inválido.");
      return null;
  } catch (error) {
      console.error("Erro ao buscar endereço:", error);
      return null;
  }
};

// Função para buscar latitude e longitude pelo endereço usando Nominatim
async getLatLongByAddress(address: string){
  try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`Erro na busca da localização: ${response.statusText}`);
      }
      const data = await response.json();

      if (data.length > 0) {
          return {
              lat: parseFloat(data[0].lat),
              lon: parseFloat(data[0].lon),
          };
      }
      console.error("Endereço não encontrado.");
      return null;
  } catch (error) {
      console.error("Erro ao buscar latitude/longitude:", error);
      return null;
  }
};

// Função principal para combinar as buscas
async getLatLongByCEP(cep:string){
  const address = await this.getAddressByCEP(cep);

  if (address) {
      const location = await this.getLatLongByAddress(address);
      if (location) {
          console.log("Latitude:", location.lat, "Longitude:", location.lon);
      } else {
          console.log("Não foi possível encontrar a localização.");
      }
  } else {
      console.log("CEP inválido.");
  }
}

toRadians(degrees: number){
  return (degrees * Math.PI) / 180;
}

// Calcula a distância usando a fórmula do haversine
calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
): number {
    const R = 6371; // Raio da Terra em km
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) * Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.asin(Math.sqrt(a));
    return R * c; // Distância em km
};

async getDistanceBetweenCEPs (cep1: string, cep2: string) {
  // Funções para obter a localização já explicadas anteriormente
  const getLatLongByCEP = async (cep: string): Promise<{ lat: number; lon: number } | null> => {
      const address = await this.getAddressByCEP(cep);
      return address ? this.getLatLongByAddress(address) : null;
  };

  const location1 = await getLatLongByCEP(cep1);
  const location2 = await getLatLongByCEP(cep2);

  if (location1 && location2) {
      const distance = this.calculateDistance(
          location1.lat,
          location1.lon,
          location2.lat,
          location2.lon
      );
      return distance.toFixed(2);
  } else {
    return 0;
      console.log("Não foi possível encontrar a localização de um ou ambos os CEPs.");
  }
};
}
