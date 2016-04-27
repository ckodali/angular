import { UrlSegment, Tree } from './segments';
import { BaseException } from 'angular2/src/facade/exceptions';
export class RouterUrlParser {
}
export class DefaultRouterUrlParser extends RouterUrlParser {
    parse(url) {
        if (url.length === 0) {
            throw new BaseException(`Invalid url '${url}'`);
        }
        return new Tree(this._parseNodes(url));
    }
    _parseNodes(url) {
        let index = url.indexOf("/", 1);
        let children;
        let currentUrl;
        if (index > -1) {
            children = this._parseNodes(url.substring(index + 1));
            currentUrl = url.substring(0, index);
        }
        else {
            children = [];
            currentUrl = url;
        }
        return [new UrlSegment(currentUrl, {}, "")].concat(children);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3VybF9wYXJzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUdaUDBTcTlELnRtcC9hbmd1bGFyMi9zcmMvYWx0X3JvdXRlci9yb3V0ZXJfdXJsX3BhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUMsTUFBTSxZQUFZO09BQ3BDLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDO0FBRTVEO0FBQXVGLENBQUM7QUFFeEYsNENBQTRDLGVBQWU7SUFDekQsS0FBSyxDQUFDLEdBQVc7UUFDZixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxJQUFJLGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU8sV0FBVyxDQUFDLEdBQVc7UUFDN0IsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxRQUFzQixDQUFDO1FBQzNCLElBQUksVUFBVSxDQUFDO1FBQ2YsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDZCxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ25CLENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9ELENBQUM7QUFDSCxDQUFDO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1VybFNlZ21lbnQsIFRyZWV9IGZyb20gJy4vc2VnbWVudHMnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUm91dGVyVXJsUGFyc2VyIHsgYWJzdHJhY3QgcGFyc2UodXJsOiBzdHJpbmcpOiBUcmVlPFVybFNlZ21lbnQ+OyB9XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0Um91dGVyVXJsUGFyc2VyIGV4dGVuZHMgUm91dGVyVXJsUGFyc2VyIHtcbiAgcGFyc2UodXJsOiBzdHJpbmcpOiBUcmVlPFVybFNlZ21lbnQ+IHtcbiAgICBpZiAodXJsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oYEludmFsaWQgdXJsICcke3VybH0nYCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVHJlZTxVcmxTZWdtZW50Pih0aGlzLl9wYXJzZU5vZGVzKHVybCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VOb2Rlcyh1cmw6IHN0cmluZyk6IFVybFNlZ21lbnRbXSB7XG4gICAgbGV0IGluZGV4ID0gdXJsLmluZGV4T2YoXCIvXCIsIDEpO1xuICAgIGxldCBjaGlsZHJlbjogVXJsU2VnbWVudFtdO1xuICAgIGxldCBjdXJyZW50VXJsO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjaGlsZHJlbiA9IHRoaXMuX3BhcnNlTm9kZXModXJsLnN1YnN0cmluZyhpbmRleCArIDEpKTtcbiAgICAgIGN1cnJlbnRVcmwgPSB1cmwuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRyZW4gPSBbXTtcbiAgICAgIGN1cnJlbnRVcmwgPSB1cmw7XG4gICAgfVxuICAgIHJldHVybiBbbmV3IFVybFNlZ21lbnQoY3VycmVudFVybCwge30sIFwiXCIpXS5jb25jYXQoY2hpbGRyZW4pO1xuICB9XG59Il19