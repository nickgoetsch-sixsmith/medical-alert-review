# Device photos

Drop licensed device photos here, named by brand slug + form factor:

- medical-guardian-mgmove.webp   (MGMove smartwatch)
- bay-alarm-sos-all-in-one.webp  (SOS All-in-One)
- lively-mobile2.webp            (Lively Mobile2 / GreatCall)
- life-alert-pendant.webp        (Life Alert pendant + base)
- logicmark-freedom-alert.webp   (LogicMark Freedom Alert 911)

Source from each brand's official product/press-kit page or its Amazon listing
(MobileHelp / Bay Alarm have Amazon listings). Confirm you have the right to use
the image (press kit / affiliate media library / manufacturer permission).
Optimize to AVIF/WebP, then replace the <DeviceTokenCard> / token slot with
<ImageFigure src="/images/devices/<file>" width=… height=… alt=…>.
next.config.ts already sets images.formats to avif+webp.
