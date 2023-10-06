using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Optimum.Data.Entities
{
    /// <summary>
    /// Entities to updatedata.
    /// </summary>
    public class UpdateData
    {
         
        [JsonPropertyName("id")]
        public string? Id { get; set; }

        [JsonPropertyName("salutation")]
        public string? Salutation { get; set; }

        [JsonPropertyName("initials")]
        public string? Initials { get; set; }

        [JsonPropertyName("firstname")]
        public string? Firstname { get; set; }

        [JsonPropertyName("firstname_ascii")]
        public string? FirstnameAscii { get; set; }

        [JsonPropertyName("gender")]
        public string ?Gender { get; set; }

        [JsonPropertyName("firstname_country_rank")]
        public string? FirstnameCountryRank { get; set; }

        [JsonPropertyName("firstname_country_frequency")]
        public string?  FirstnameCountryFrequency { get; set; }

        [JsonPropertyName("lastname")]
        public string? Lastname { get; set; }

        [JsonPropertyName("lastname_ascii")]
        public string? LastnameAscii { get; set; }

        [JsonPropertyName("lastname_country_rank")]
        public string? LastnameCountryRank { get; set; }

        [JsonPropertyName("lastname_country_frequency")]
        public string? LastnameCountryFrequency { get; set; }

        [JsonPropertyName("email")]
        public string? Email { get; set; }

        [JsonPropertyName("password")]
        public string? Password { get; set; }

        [JsonPropertyName("country_code")]
        public string? CountryCode { get; set; }

        [JsonPropertyName("country_code_alpha")]
        public string? CountryCodeAlpha { get; set; }

        [JsonPropertyName("country_name")]
        public string?CountryName { get; set; }

        [JsonPropertyName("primary_language_code")]
        public string ?PrimaryLanguageCode { get; set; }

        [JsonPropertyName("primary_language")]
        public string? PrimaryLanguage { get; set; }

        [JsonPropertyName("balance")]
        public Double? Balance { get; set; }

        [JsonPropertyName("phone_Number")]
        public string? PhoneNumber { get; set; }

        [JsonPropertyName("currency")]
        public string? Currency { get; set; }
    
}
}
