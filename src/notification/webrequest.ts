import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {config} from '../config';
import { get } from 'https';
import { URL } from 'url';
const webrequest = config.notifications.webrequest;

export function sendWebrequestNotification(link: Link, store: Store) {
	if (webrequest.url) {
		logger.debug('↗ sending webrequest notification');
		var url = new URL(String(webrequest.url).replace('URL',encodeURI(link.url)));
		
		logger.info(url.hostname+url.pathname+url.searchParams);
		(async () => {
			get(url, (resp) => {
			  

			}).on("error", (err) => {
			  console.log("Error: " + err.message);
			});
			
		})();
	}
}