// import { AppServiceError } from 'module/Common';
import { CardApi } from './api/CardApi';
import { Card } from '../../Model/Card';

export var CardService = {

  // Get card List service
  getCards(): Promise<Array<Card>> {
    return CardApi.getCards()
      .then((data: any) => {
        return data;
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
}