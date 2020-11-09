import { getApiConfig } from '../../mainConfig';

export var CardApi = {

  // Get Card list
  getCards: function () {
    return getApiConfig()
      .get(`cards`).then(data => {
        return data && data.data ? data.data : [];
      })
      .catch(error => {
        throw error;
      });
  }
}
