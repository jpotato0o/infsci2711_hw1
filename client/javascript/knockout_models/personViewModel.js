{\rtf1\ansi\ansicpg936\cocoartf1344\cocoasubrtf720
{\fonttbl\f0\fmodern\fcharset0 Courier-Bold;\f1\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red14\green14\blue14;\red234\green233\blue255;\red210\green0\blue53;
\red17\green137\blue135;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720

\f0\b\fs30 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 var
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  restBaseUrl 
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 =
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  \cf4 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec4 "http://localhost:7654/"\cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 ;\
\

\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 function
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  PersonViewModel(firstName, lastName) \{\
	
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 var
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  self 
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 =
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 this
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 ;\
\
	self.firstName 
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 =
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  ko.observable(firstName);\
	self.lastName 
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 =
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  ko.observable(lastName);\
\}\
\

\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 function
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  PersonsViewModel() \{\
	
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 var
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  self 
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 =
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 this
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 ;\
\
	self.people 
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 =
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  ko.observableArray();\
\
	self.newPerson 
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 =
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  ko.observable(
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 new
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  PersonViewModel());\
\
	self.findAll 
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 =
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 function
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 () \{\
		$.ajax(\{\
			url
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 :
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  restBaseUrl 
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 +
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  \cf4 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec4 "Person"\cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 ,\
			type
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 :
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  \cf4 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec4 'GET'\cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 ,\
			dataType
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 :
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  \cf4 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec4 'json'\cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 ,\
			contentType
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 :
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  \cf4 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec4 "application/json"\cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 ,\
			crossDomain
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 :
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 true
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 ,\
			success
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 :
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 function
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 (data) \{\
				self.people.removeAll();\
\
				
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 for
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  (
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 var
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  i 
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 =
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  \cf5 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec5 0\cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 ; i 
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 <
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  data.length; i
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 ++
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 ) \{\
					
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 var
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  person 
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 =
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 new
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  PersonViewModel(data[i].firstName, data[i].lastName);\
                   \
					self.people.push(person);\
				\}\
			\},\
			error
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 :
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 function
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 (data) \{\
				alert(\cf4 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec4 "Something went wrong while getting persons list. Please try again."\cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 );\
			\}\
		\});\
	\};\
\
	self.addPerson 
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 =
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 function
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 () \{\
		$.ajax(\{\
			url
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 :
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  restBaseUrl 
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 +
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  \cf4 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec4 "Person"\cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 ,\
			type
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 :
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  \cf4 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec4 'PUT'\cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 ,\
			data
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 :
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  ko.toJSON(self.newPerson()),\
			dataType
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 :
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  \cf4 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec4 'json'\cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 ,\
			contentType
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 :
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  \cf4 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec4 "application/json"\cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 ,\
			crossDomain
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 :
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 true
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 ,\
			success
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 :
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 function
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 (data) \{\
				self.people.push(
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 new
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  PersonViewModel(data.firstName, data.lastName));\
				self.newPerson(
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 new
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  PersonViewModel());\
			\},\
			error
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 :
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 function
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 (data) \{\
				alert(\cf4 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec4 "Something went wrong while adding new person. Please try again."\cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 );\
			\}\
		\});\
	\};\
\
	self.findAll();\
\}\
\
ko.applyBindings(
\f0\b \expnd0\expndtw0\kerning0
\outl0\strokewidth0 new
\f1\b0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0  PersonsViewModel(), $(\cf4 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec4 "#personsContainer"\cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 )[\cf5 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec5 0\cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 ]);\
}