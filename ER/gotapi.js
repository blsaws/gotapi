var respecConfig = {
   // specification status (e.g. WD, LCWD, NOTE, etc.). If in doubt use ED.
   specStatus:           "unofficial",

   // the specification's short name, as in http://www.openmobilealliance.org/releases/short-name/
   shortName:            "gotapi",
   // if your specification has a subtitle that goes below the main
   // formal title, define it here
   // subtitle   :  "an excellent document",

   // if you wish the publication date to be other than today, set this
   // publishDate:  "2009-08-06",

   // new ability to override the copyright completely
   overrideCopyright: "<p class='copyright'>Use of this document is subject to all of the terms and conditions of the Use Agreement located at <a href=\"http://www.openmobilealliance.org/UseAgreement.html\">http://www.openmobilealliance.org/UseAgreement.html</a>.<br/>Unless this document is clearly designated as an approved specification, this document is a work in process, is not an approved Open Mobile Alliance™ specification, and is subject to revision or removal without notice.<br/>You may use this document or any part of the document for internal or educational purposes only, provided you do not modify, edit or take out of context the information in this document in any manner.  Information contained in this document may be used, at your sole risk, for any purposes.  You may not use this document in any other manner without the prior written permission of the Open Mobile Alliance.  The Open Mobile Alliance authorizes you to copy this document, provided that you retain all copyright and other proprietary notices contained in the original materials on any copies of the materials and that you comply strictly with these terms.  This copyright permission does not constitute an endorsement of the products or services.  The Open Mobile Alliance assumes no responsibility for errors or omissions in this document.<br/>Each Open Mobile Alliance member has agreed to use reasonable endeavors to inform the Open Mobile Alliance in a timely manner of Essential IPR as it becomes aware that the Essential IPR is related to the prepared or published specification.  However, the members do not have an obligation to conduct IPR searches.  The declared Essential IPR is publicly available to members and non-members of the Open Mobile Alliance and may be found on the OMA IPR Declarations list at <a href=\"http://www.openmobilealliance.org/ipr.html\">http://www.openmobilealliance.org/ipr.html</a>.  The Open Mobile Alliance has not conducted an independent IPR review of this document and the information contained herein, and makes no representations or warranties regarding third party IPR, including without limitation patents, copyrights or trade secret rights.  This document may contain inventions for which you must obtain licenses from third parties before making, using or selling the inventions.  Defined terms above are set forth in the schedule to the Open Mobile Alliance Application Form.<br/>NO REPRESENTATIONS OR WARRANTIES (WHETHER EXPRESS OR IMPLIED) ARE MADE BY THE OPEN MOBILE ALLIANCE OR ANY OPEN MOBILE ALLIANCE MEMBER OR ITS AFFILIATES REGARDING ANY OF THE IPR’S REPRESENTED ON THE 'OMA IPR DECLARATIONS' LIST, INCLUDING, BUT NOT LIMITED TO THE ACCURACY, COMPLETENESS, VALIDITY OR RELEVANCE OF THE INFORMATION OR WHETHER OR NOT SUCH RIGHTS ARE ESSENTIAL OR NON-ESSENTIAL.<br/>THE OPEN MOBILE ALLIANCE IS NOT LIABLE FOR AND HEREBY DISCLAIMS ANY DIRECT, INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE USE OF DOCUMENTS AND THE INFORMATION CONTAINED IN THE DOCUMENTS.<br/>© 2014 Open Mobile Alliance Ltd.  All Rights Reserved.<br/>Used with the permission of the Open Mobile Alliance Ltd. under the terms set forth above.<br/></p>",

   // if the specification's copyright date is a range of years, specify
   // the start date here:
   // copyrightStart: "2005",

   // if there is a previously published draft, uncomment this and set its YYYY-MM-DD
   prevED: "https://www.openmobilealliance.org/draft/gotapi/20141105/",

   // if there a publicly available Editor's Draft, this is the link
   edDraftURI:           "https://www.openmobilealliance.org/draft/gotapi/20141105",

   // if this is a LCWD, uncomment and set the end of its review period
   // lcEnd: "2009-08-05",

   // if you want to have extra CSS, append them to this list
   // it is recommended that the respec.css stylesheet be kept
   extraCSS:             ["http://dev.w3.org/2009/dap/ReSpec.js/css/respec.css"],
   //extraCSS:           ["../../../2009/dap/ReSpec.js/css/respec.css"],

   // authors, add as many as you like.
   // This is optional, uncomment if you have authors as well as editors.
   // only "name" is required. Same format as editors.

   authors:  [
    { name: "Bryan Sullivan", company: "AT&T"}
   ],

   // name of the WG
   wg: ["Content Delivery"]          ,

   // URI of the public WG page
   wgURI:["https://www.openmobilealliance.org/wiki/cd"],

   // name (without the @w3.org) of the public mailing to which comments are due
   wgPublicList: "oma-cd",

   // URI of the patent status for this WG, for Rec-track documents
   // !!!! IMPORTANT !!!!
   // This is important for Rec-track documents, do not copy a patent URI from a random
   // document unless you know what you're doing. If in doubt ask your friendly neighbourhood
   // Team Contact.
   wgPatentURI:   ["https://www.openmobilealliance.org"],

   localBiblio:  {
		"SCRRULES": {
		title: "OMA-ORG-SCR_Rules_and_Procedures: SCR Rules and Procedures", 
		publisher: "Open Mobile Alliance™",
		href: "http://www.openmobilealliance.org/"
		},
		"OMA-DM": {
		title: "OMA Device Management V2.0", 
		publisher: "Open Mobile Alliance™",
		href: "http://www.openmobilealliance.org/"
		},
		"OMNA": {
		title: "OMA Naming Authority", 
		publisher: "Open Mobile Alliance™",
		href: "http://www.openmobilealliance.org/tech/omna.aspx"
		},
		"JSON-RPC": {
		title: "JSON-RPC 2.0 Specification",
		publisher: "JSON-RPC Working Group",
		href: "http://www.jsonrpc.org/specification"
		},
		"HTTP/2": {
		title: "Hypertext Transfer Protocol version 2", 
		publisher: "Internet Engineering Task Force (IETF)",
		href: "https://tools.ietf.org/html/draft-ietf-httpbis-http2"
		},
		"RTCWeb": {
		title: "Rtcweb", 
		publisher: "Internet Engineering Task Force (IETF)",
		href: "http://tools.ietf.org/wg/rtcweb/"
		}
	}
};